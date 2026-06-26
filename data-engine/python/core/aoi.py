# =====================================
# AOI (Area of Interest) Module
# =====================================

import ee


def create_aoi(latitude, longitude, radius):
    """
    Create Area of Interest (AOI)

    Parameters
    ----------
    latitude : float
        AOI center latitude

    longitude : float
        AOI center longitude

    radius : int
        Radius in meters

    Returns
    -------
    ee.Geometry
        Circular AOI geometry
    """

    # Create center point using longitude and latitude
    center = ee.Geometry.Point(
        [longitude, latitude]
    )

    # Create circular AOI using radius buffer
    aoi = center.buffer(radius)

    return aoi