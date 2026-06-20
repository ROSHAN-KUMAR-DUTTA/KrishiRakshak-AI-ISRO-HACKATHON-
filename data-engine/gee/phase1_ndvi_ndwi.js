// =============================
// AOI
// =============================

// Khaperkheda farm area center
var center = ee.Geometry.Point([78.349679, 22.819936]);

// 1.5 km radius AOI
var aoi = center.buffer(1500);

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
  .filterDate('2025-01-01', '2025-12-28')
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

  var start = ee.Date.fromYMD(2025, month, 1);
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


// =============================
// July & August Image Count
// =============================

var julyCollection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
      .filterBounds(aoi)
      .filterDate('2025-07-01','2025-07-31')
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',60));

print('July Image Count', julyCollection.size());

var augustCollection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
      .filterBounds(aoi)
      .filterDate('2025-08-01','2025-08-31')
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',60));

print('August Image Count', augustCollection.size());


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

  var start = ee.Date.fromYMD(2025, month, 1);
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