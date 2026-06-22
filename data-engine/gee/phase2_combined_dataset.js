
// =====================================
// Future API Response Structure
// =====================================

/*

{
  "metadata": {
    "latitude": latitude,
    "longitude": longitude,
    "radius": radius,
    "year": selectedYear
  },

  "monthly_data": [
    {
      "month": 1,

      "indices": {
        "ndvi": 0.61,
        "ndwi": -0.56
      },

      "crop": {
        "type": null,
        "stage": null,
        "stress": null
      }
    }
  ]
}

*/
// =============================
// AOI
// =============================

// User Inputs

var latitude = 22.819936;
var longitude = 78.349679;

var radius = 1500;

var selectedYear = 2025;

var startDate = selectedYear + '-01-01';
var endDate = selectedYear + '-12-31';

// Khaperkheda farm area center
var center = ee.Geometry.Point([longitude, latitude])

// 1.5 km radius AOI
var aoi = center.buffer(radius)


// Zoom to AOI
Map.centerObject(aoi, 14);

// Show AOI
Map.addLayer(aoi, {color: 'yellow'}, 'AOI');

// Area in sq km
print('Area in sq km:', aoi.area().divide(1000000));


// =============================
// Sentinel-2 Collection
// =============================

var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(aoi)
  .filterDate(startDate, endDate)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 60))
  .median();


// =============================
// NDVI
// =============================

var ndvi = s2.normalizedDifference(['B8', 'B4']);

var s2_clip = s2.clip(aoi);
var ndvi_clip = ndvi.clip(aoi);

Map.addLayer(
  s2_clip,
  {
    bands:['B4','B3','B2'],
    min:0,
    max:3000
  },
  'Sentinel-2 AOI'
);

Map.addLayer(
  ndvi_clip,
  {
    min:-1,
    max:1,
    palette:['blue','white','green']
  },
  'NDVI AOI'
);

var mean_ndvi = ndvi_clip.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: aoi,
  scale: 10,
  maxPixels: 1e9
});

print('Mean NDVI', mean_ndvi);


// =============================
// Monthly NDVI
// =============================

var months = ee.List.sequence(1,12);

var monthlyNDVI = months.map(function(month){

  var start = ee.Date.fromYMD(selectedYear, month, 1);
  var end = start.advance(1,'month');

  var collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
      .filterBounds(aoi)
      .filterDate(start,end)
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',60));

  var image = collection.median();

  var ndvi = image.normalizedDifference(['B8','B4']);

  var mean = ndvi.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: aoi,
      scale: 10,
      maxPixels: 1e9
  });

  return ee.Feature(null,{
      month: month,
      mean_ndvi: mean.get('nd')
  });

});

print('Monthly NDVI', monthlyNDVI);
print('Monthly NDVI First Record',
      ee.Feature(monthlyNDVI.get(0)));




// =============================
// NDWI
// =============================

var ndwi = s2.normalizedDifference(['B3','B8']);

var ndwi_clip = ndwi.clip(aoi);

Map.addLayer(
  ndwi_clip,
  {
    min:-1,
    max:1,
    palette:['brown','white','blue']
  },
  'NDWI AOI'
);

var mean_ndwi = ndwi_clip.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: aoi,
  scale: 10,
  maxPixels: 1e9
});

print('Mean NDWI', mean_ndwi);


// =============================
// Monthly NDWI
// =============================

var monthlyNDWI = months.map(function(month){

  var start = ee.Date.fromYMD(selectedYear, month, 1);
  var end = start.advance(1,'month');

  var collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
      .filterBounds(aoi)
      .filterDate(start,end)
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',60));

  var image = collection.median();

  var ndwi = image.normalizedDifference(['B3','B8']);

  var mean = ndwi.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: aoi,
      scale: 10,
      maxPixels: 1e9
  });

  return ee.Feature(null,{
      month: month,
      mean_ndwi: mean.get('nd')
  });

});

print('Monthly NDWI', monthlyNDWI);
print('Monthly NDWI First Record',
      ee.Feature(monthlyNDWI.get(0)));
// =========================
// Combined NDVI + NDWI Dataset
// =========================

var combinedDataset = months.map(function(month){

  var start = ee.Date.fromYMD(selectedYear, month, 1);
  var end = start.advance(1, 'month');

  var collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
      .filterBounds(aoi)
      .filterDate(start, end)
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 60));

  var image = collection.median();

  // NDVI
  var ndvi = image.normalizedDifference(['B8','B4']);

  var ndviMean = ndvi.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: aoi,
      scale: 10,
      maxPixels: 1e9
  });

  // NDWI
  var ndwi = image.normalizedDifference(['B3','B8']);

  var ndwiMean = ndwi.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: aoi,
      scale: 10,
      maxPixels: 1e9
  });

  return ee.Feature(null,{
      month: month,
      ndvi: ndviMean.get('nd'),
      ndwi: ndwiMean.get('nd')
  });

});

print('Combined Dataset', combinedDataset);

print(
  'First Record',
  ee.Feature(combinedDataset.get(0))
);