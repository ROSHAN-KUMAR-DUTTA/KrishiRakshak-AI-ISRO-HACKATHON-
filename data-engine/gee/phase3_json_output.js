// =====================================
// Phase 3 - JSON Output Pipeline
// =====================================

// =============================
// User Inputs
// =============================

var latitude = 22.819936;
var longitude = 78.349679;

var radius = 1500;

var selectedYear = 2025;

// =============================
// AOI
// =============================

var center = ee.Geometry.Point([longitude, latitude]);

var aoi = center.buffer(radius);

Map.centerObject(aoi, 14);

Map.addLayer(aoi, {color:'yellow'}, 'AOI');


// =============================
// Metadata
// =============================

var metadata = {
  latitude: latitude,
  longitude: longitude,
  radius: radius,
  year: selectedYear
};

print('Metadata', metadata);














