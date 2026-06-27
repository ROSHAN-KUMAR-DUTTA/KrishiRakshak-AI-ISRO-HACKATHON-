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

# =====================================
# RVI Calculation
# =====================================

def calculate_rvi(image):
    """
    Calculate Radar Vegetation Index (RVI)
    from Sentinel-1 VV and VH bands.

    Parameters
    ----------
    image : ee.Image

    Returns
    -------
    ee.Image
        Radar Vegetation Index (RVI)
    """

    # Select VV and VH bands
    vv = image.select("VV")
    vh = image.select("VH")

    # Convert VV from dB to Linear
    vv_linear = (
        ee.Image.constant(10)
        .pow(vv.divide(10))
    )

    # Convert VH from dB to Linear
    vh_linear = (
        ee.Image.constant(10)
        .pow(vh.divide(10))
    )

    # Calculate RVI
    rvi = (
        ee.Image().expression(
            "(4 * vh) / (vv + vh)",
            {
                "vv": vv_linear,
                "vh": vh_linear
            }
        )
    )

    return rvi.rename("RVI")

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

    mean_value = mean_value.getInfo()
    
    print("\nMean Dictionary")

    print(mean_value)

    # Extract first value from dictionary
    mean_value = list(mean_value.values())[0]

    # No valid pixels found
    if mean_value is None:
     raise ValueError(
        "No valid pixels found after cloud masking." )

    return round(mean_value, 2)