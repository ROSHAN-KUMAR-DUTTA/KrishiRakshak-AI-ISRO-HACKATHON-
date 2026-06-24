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

#Import indices (NDVI ,NDWI) module
from core.indices import (calculate_ndvi,calculate_ndwi, get_mean_index)

#Import Get landcover histogram map
from core.landcover import (
    get_landcover_histogram,
    get_landcover_statistics )

# Earth Engine Initialization

ee.Initialize(
    project="fleet-passage-470910-u3"
)


# =====================================
# User Inputs
# =====================================

user_input = {

    "latitude": 22.819936,

    "longitude": 78.349679,

    "radius": 1500,

    "start_date": "2025-06-10",

    "end_date": "2025-07-10" }

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
    user_input["radius"]
)


# Fetch Sentinel-2 Image

image = get_sentinel2_image(
    aoi=aoi,

    start_date=user_input["start_date"],

    end_date=user_input["end_date"] )


#Calculate NDVI 
ndvi = calculate_ndvi(image)

#Calculate NDWI 
ndwi=calculate_ndwi(image)

#Calculate Mean NDVI
mean_ndvi = get_mean_index( ndvi , aoi)

# Calculate Mean NDWI

mean_ndwi = get_mean_index( ndwi ,  aoi )

# Land Cover Histogram

histogram = get_landcover_histogram(aoi)


# Land Cover Statistics

landcover_stats = (
    get_landcover_statistics(histogram)
    )

# =====================================
# Validation
# =====================================

print("AOI Created Successfully")
print("Sentinel-2 Image Retrieved Successfully")
print("NDVI Calculated Successfully")
print("NDWI Calculated Successfully")

print(mean_ndvi)
print(mean_ndwi)

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

        "mean_ndvi":
        mean_ndvi,

        "mean_ndwi":
        mean_ndwi
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

