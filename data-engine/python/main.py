# =====================================
# KrishiRakshak AI
# Main Pipeline
# =====================================

import ee
import json

# Import AOI module
from core.aoi import create_aoi

# Import Sentinel-2 module
from core.sentinel2 import get_sentinel2_image

# Import Sentinel-1 module
from core.sentinel1 import get_sentinel1_image

#Import indices (NDVI ,NDWI) module
from core.indices import (
    calculate_ndvi,
    calculate_ndwi,
    calculate_rvi,
    get_mean_index )

#Import Get landcover histogram map
from core.landcover import (
    get_landcover_histogram,
    get_landcover_statistics )

# Earth Engine Initialization

ee.Initialize(project="fleet-passage-470910-u3")

print("Earth Engine Initialized Successfully")

# =====================================
# User Inputs
# =====================================

user_input = {

    "latitude": 22.819936,

    "longitude": 78.349679,

    "radius": 1500,

    "start_date": "2025-07-10",

    "end_date": "2025-08-10" }

# =====================================
# Input Validation
# =====================================

if not (-90 <= user_input["latitude"] <= 90):
    raise ValueError("Invalid Latitude")

if not (-180 <= user_input["longitude"] <= 180):
    raise ValueError("Invalid Longitude")

if user_input["radius"] <= 0:
    raise ValueError("Radius must be greater than 0")


# Create AOI

aoi = create_aoi(
    user_input["latitude"],
    user_input["longitude"],
    user_input["radius"] )

print("AOI Created Successfully")

# Fetch Sentinel-2 Image

sentinel2_image = get_sentinel2_image(
    aoi=aoi,

    start_date=user_input["start_date"],

    end_date=user_input["end_date"] )

print("Sentinel-2 Image Retrieved Successfully")

# Fetch Sentinel-1 Image
sentinel1_image = get_sentinel1_image(
    aoi=aoi,
    start_date=user_input["start_date"],
    end_date=user_input["end_date"] )

print("Sentinel-1 Image Retrieved Successfully")

#Calculate NDVI 
ndvi = calculate_ndvi(sentinel2_image)

#Calculate NDWI 
ndwi=calculate_ndwi(sentinel2_image)

#Calculate Mean NDVI
mean_ndvi = get_mean_index( ndvi , aoi)
print("NDVI Calculated Successfully")

# Calculate Mean NDWI

mean_ndwi = get_mean_index( ndwi ,  aoi )
print("NDWI Calculated Successfully")

# RVI
rvi = calculate_rvi(sentinel1_image)
mean_rvi = get_mean_index(rvi ,aoi)
print("RVI Calculate successfully")

# Land Cover Histogram

histogram = get_landcover_histogram(aoi)


# Land Cover Statistics

landcover_stats = (
    get_landcover_statistics(histogram)
    )



print("Land Cover Histogram Retrieved")

print( histogram.getInfo())

print( "\nLand Cover Statistics")

print(landcover_stats)

# =====================================
# Final JSON Output
# =====================================

final_json = {

    "metadata": {

        "latitude":
        user_input["latitude"],

        "longitude":
        user_input["longitude"],

        "radius":
        user_input["radius"],

        "start_date":
        user_input["start_date"],

        "end_date":
        user_input["end_date"]
    },

    "indices": {
    "mean_ndvi": mean_ndvi,
    "mean_ndwi": mean_ndwi,
    "mean_rvi": mean_rvi
    },

    "land_cover":
    landcover_stats,

    # Future Modules
    "crop_type": None,

    "stress_index": None,

    "growth_stage": None
}

print("\nFinal JSON Output\n")

print( json.dumps ( final_json , indent=4 ) )

