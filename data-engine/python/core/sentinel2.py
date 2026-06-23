# =====================================
# Sentinel-2 Data Fetch Module
# =====================================

import ee


def get_sentinel2_image(
    aoi,
    start_date,
    end_date,
    cloud_threshold=60
):
    """
    Fetch Sentinel-2 imagery for a given AOI
    and date range.

    Parameters
    ----------
    aoi : ee.Geometry
        Area of Interest

    start_date : str
        Example: '2025-01-01'

    end_date : str
        Example: '2025-01-31'

    cloud_threshold : int
        Maximum allowed cloud percentage

    Returns
    -------
    ee.Image
        Median Sentinel-2 composite image
    """

    # Load Sentinel-2 Surface Reflectance dataset
    collection = (
        ee.ImageCollection(
            "COPERNICUS/S2_SR_HARMONIZED"
        )

        # Filter by AOI
        .filterBounds(aoi)

        # Filter by date range
        .filterDate(
            start_date,
            end_date
        )

        # Remove highly cloudy images
        .filter(
            ee.Filter.lt(
                "CLOUDY_PIXEL_PERCENTAGE",
                cloud_threshold
            )
        )
    )

    # Create median composite image
    image = collection.median()

    return image