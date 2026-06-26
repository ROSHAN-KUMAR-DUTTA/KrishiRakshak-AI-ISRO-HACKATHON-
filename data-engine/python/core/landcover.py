# =====================================
# Land Cover Detection Module
# =====================================

import ee


def get_landcover_histogram(aoi):
    """
    Get land cover pixel counts
    from ESA WorldCover dataset.

    Parameters
    ----------
    aoi : ee.Geometry
        Area of Interest

    Returns
    -------
    ee.Dictionary
        Histogram of land cover classes
    """

    # Load ESA WorldCover dataset
    worldcover = ee.ImageCollection(
        "ESA/WorldCover/v200"
    ).first()

    # Calculate pixel frequency
    landcover_stats = worldcover.reduceRegion(
        reducer=ee.Reducer.frequencyHistogram(),
        geometry=aoi,
        scale=10,
        maxPixels=1e9
    )

    # Extract histogram dictionary
    histogram = ee.Dictionary(
        landcover_stats.get("Map")
    )

    return histogram


def get_landcover_statistics(histogram):
    """
    Convert land cover histogram into
    percentage statistics and dominant
    land type.

    Parameters
    ----------
    histogram : dict
        Histogram returned by
        get_landcover_histogram()

    Returns
    -------
    dict
        Land cover statistics
    """

    # Convert Earth Engine dictionary
    # into Python dictionary
    histogram = histogram.getInfo()

    # Total pixels
    total_pixels = sum(
        histogram.values()
    )

    # Land Cover Classes
    forest = histogram.get('10', 0)

    grassland = histogram.get('30', 0)

    agriculture = histogram.get('40', 0)

    urban = histogram.get('50', 0)

    sparse = histogram.get('60', 0)

    water = histogram.get('80', 0)

    # Percentages
    forest_percent = (
        forest / total_pixels
    ) * 100

    grassland_percent = (
        grassland / total_pixels
    ) * 100

    agriculture_percent = (
        agriculture / total_pixels
    ) * 100

    urban_percent = (
        urban / total_pixels
    ) * 100

    sparse_percent = (
        sparse / total_pixels
    ) * 100

    water_percent = (
        water / total_pixels
    ) * 100

    # Dominant Land Type
    dominant_class = max(
        histogram,
        key=histogram.get
    )

    land_type_mapping = {
        '10': 'Forest',
        '30': 'Grassland',
        '40': 'Agriculture',
        '50': 'Urban',
        '60': 'Sparse Vegetation',
        '80': 'Water'
    }

    land_type = land_type_mapping.get(
        dominant_class,
        'Other'
    )

    return {

        "land_type": land_type,

        "agriculture_percent":
        round(agriculture_percent, 2),

        "forest_percent":
        round(forest_percent, 2),

        "grassland_percent":
        round(grassland_percent, 2),

        "urban_percent":
        round(urban_percent, 2),

        "sparse_vegetation_percent":
        round(sparse_percent, 2),

        "water_percent":
        round(water_percent, 2)
    }