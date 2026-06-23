# =====================================
# Vegetation & Water Index Module
# =====================================

import ee


def calculate_ndvi(image):
    """
    Calculate NDVI
    (Normalized Difference Vegetation Index)

    Formula:
    NDVI = (NIR - Red) / (NIR + Red)

    Sentinel-2 Bands:
    B8 = Near Infrared (NIR)
    B4 = Red

    Returns
    -------
    ee.Image
        NDVI image
    """

    ndvi = image.normalizedDifference(
        ['B8', 'B4']
    )

    return ndvi


def calculate_ndwi(image):
    """
    Calculate NDWI
    (Normalized Difference Water Index)

    Formula:
    NDWI = (Green - NIR) / (Green + NIR)

    Sentinel-2 Bands:
    B3 = Green
    B8 = Near Infrared (NIR)

    Returns
    -------
    ee.Image
        NDWI image
    """

    ndwi = image.normalizedDifference(
        ['B3', 'B8']
    )

    return ndwi

def get_mean_index(index_image, aoi):
    """
    Calculate mean value of an index
    inside the given AOI.

    Parameters
    ----------
    index_image : ee.Image
        NDVI / NDWI / EVI image

    aoi : ee.Geometry
        Area of Interest

    Returns
    -------
    float
        Mean index value
    """

    mean_value = index_image.reduceRegion(
        reducer=ee.Reducer.mean(),
        geometry=aoi,
        scale=10,
        maxPixels=1e9
    )

    # Extract value from Earth Engine dictionary
    mean_value = mean_value.getInfo()

    # Get numerical value
    mean_value = mean_value.get('nd', 0)

    # Round for cleaner output
    return round(mean_value, 2)