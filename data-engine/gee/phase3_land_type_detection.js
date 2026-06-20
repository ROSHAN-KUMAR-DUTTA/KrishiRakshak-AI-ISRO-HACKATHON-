// User Inputs
var latitude = 22.819936;
var longitude = 78.349679;

var radius = 1500;

var center = ee.Geometry.Point([longitude, latitude]);
var aoi = center.buffer(radius);

Map.centerObject(aoi, 14);
Map.addLayer(aoi, {color:'yellow'}, 'AOI');
// =============================
// ESA WorldCover
// =============================

var worldCover = ee.ImageCollection("ESA/WorldCover/v200")
                    .first();

Map.addLayer(
  worldCover.clip(aoi),
  {},
  'ESA WorldCover'
);
// =============================
// Dominant Land Cover
// =============================

var landCoverStats = worldCover.reduceRegion({
  reducer: ee.Reducer.frequencyHistogram(),
  geometry: aoi,
  scale: 10,
  maxPixels: 1e9
});

print('Land Cover Statistics', landCoverStats);

// =============================
// Land Cover Histogram
// =============================

var histogram = ee.Dictionary(
  landCoverStats.get('Map')
);

print('Histogram', histogram);

// =============================
// Total Pixels
// =============================

var totalPixels = ee.Array(
  histogram.values()
).reduce(
  ee.Reducer.sum(),
  [0]
);

print('Total Pixels', totalPixels);

// =============================
// Cropland Percentage
// =============================

var croplandPixels = ee.Number(
  histogram.get('40', 0)
);

var croplandPercent = croplandPixels
  .divide(totalPixels.get([0]))
  .multiply(100);

print('Cropland %', croplandPercent);

// Water %

var waterPixels = ee.Number(
  histogram.get('80', 0)
);

var waterPercent = waterPixels
  .divide(totalPixels.get([0]))
  .multiply(100);

print('Water %', waterPercent);


// Forest %

var forestPixels = ee.Number(
  histogram.get('10', 0)
);

var forestPercent = forestPixels
  .divide(totalPixels.get([0]))
  .multiply(100);

print('Forest %', forestPercent);


// Urban %

var urbanPixels = ee.Number(
  histogram.get('50', 0)
);

var urbanPercent = urbanPixels
  .divide(totalPixels.get([0]))
  .multiply(100);

print('Urban %', urbanPercent);

// Grassland %

var grasslandPixels = ee.Number(
  histogram.get('30', 0)
);

var grasslandPercent = grasslandPixels
  .divide(totalPixels.get([0]))
  .multiply(100);

print('Grassland %', grasslandPercent);

// Sparse Vegetation %

var sparsePixels = ee.Number(
  histogram.get('60', 0)
);

var sparsePercent = sparsePixels
  .divide(totalPixels.get([0]))
  .multiply(100);

print('Sparse Vegetation %', sparsePercent);

// =============================
// Dominant Land Cover Class
// =============================

var dominantClass = histogram.keys().sort(
  histogram.values()
).get(-1);

print('Dominant Class', dominantClass);

// =============================
// Land Type Mapping
// =============================

var landType = ee.Algorithms.If(
  ee.Number.parse(dominantClass).eq(40),
  'Agriculture',

  ee.Algorithms.If(
    ee.Number.parse(dominantClass).eq(80),
    'Water',

    ee.Algorithms.If(
      ee.Number.parse(dominantClass).eq(10),
      'Forest',

      ee.Algorithms.If(
        ee.Number.parse(dominantClass).eq(50),
        'Urban',

        ee.Algorithms.If(
          ee.Number.parse(dominantClass).eq(30),
          'Grassland',

          ee.Algorithms.If(
            ee.Number.parse(dominantClass).eq(60),
            'Sparse Vegetation',
            'Other'
          )
        )
      )
    )
  )
);

print('Land Type', landType);