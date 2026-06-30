# =====================================
# Sentinel-1 Data Fetch Module
# =====================================

import ee


def get_sentinel1_image(
    aoi,
    start_date,
    end_date
):
    """
    Fetch latest Sentinel-1 radar image.
    """

    collection = (
        ee.ImageCollection(
            "COPERNICUS/S1_GRD"
        )

        .filterBounds(aoi)

        .filterDate(
            start_date,
            end_date
        )

        .filter(
            ee.Filter.eq(
                "instrumentMode",
                "IW"
            )
        )

        .filter(
            ee.Filter.listContains(
                "transmitterReceiverPolarisation",
                "VV"
            )
        )

        .filter(
            ee.Filter.listContains(
                "transmitterReceiverPolarisation",
                "VH"
            )
        )
    )
    

    
    collection_size = (
        collection
        .size()
        .getInfo() )

    if collection_size == 0:
        raise ValueError(
            "No Sentinel-1 images found." )
        
    
    print("\nImages Found sentinel-1:", collection_size )
    
    # SELECT LATEST IMAGE
    
    selected_image = (
        collection
        .sort(
            "system:time_start",
            False
        )
        .first() )

    
    return selected_image

