# =====================================
# Sentinel-2 Data Fetch Module
# =====================================

import ee


# =====================================
# Cloud Masking Function
# =====================================

def mask_clouds(image):
    """
    Remove cloud and cirrus cloud pixels
    using Sentinel-2 QA60 band.
    """

    # Select QA60 quality band
    qa = image.select("QA60")

    # Bit 10 = Cloud
    cloud_bit_mask = 1 << 10

    # Bit 11 = Cirrus Cloud
    cirrus_bit_mask = 1 << 11

    # Cloud mask
    cloud_mask = (
        qa.bitwiseAnd(cloud_bit_mask)
        .eq(0)
    )

    # Cirrus cloud mask
    cirrus_mask = (
        qa.bitwiseAnd(cirrus_bit_mask)
        .eq(0)
    )

    # Combine masks
    mask = cloud_mask.And(cirrus_mask)

    # Apply mask
    return image.updateMask(mask)


# =====================================
# Sentinel-2 Image Fetch Function
# =====================================

def get_sentinel2_image(
    aoi,
    start_date,
    end_date,
    cloud_threshold=60
):
    """
    Fetch latest usable Sentinel-2 image
    for a given AOI and date range.

    Parameters
    ----------
    aoi : ee.Geometry

    start_date : str

    end_date : str

    cloud_threshold : int

    Returns
    -------
    ee.Image
        Latest cloud-masked Sentinel-2 image
    """

    # =====================================
    # Create Sentinel-2 Collection
    # =====================================

    collection = (
        ee.ImageCollection(
            "COPERNICUS/S2_SR_HARMONIZED" )
        .filterBounds(aoi)
        
        .filterDate(
            start_date,
            end_date)
        
        .filter(
            ee.Filter.lt(
                "CLOUDY_PIXEL_PERCENTAGE",
                cloud_threshold  )
            )
    )


    collection_size = (
        collection
        .size()
        .getInfo() )
    
    print( "\nImages Found:",collection_size)

    # No image found
    if collection_size == 0:
        raise ValueError(
            "No Sentinel-2 images found for the selected AOI and date range.")

  
    # =====================================
    # Select Latest Usable Image
    # =====================================

    selected_image = (
        collection
        .sort(
            "system:time_start",
            False
        )
        .first()
    )

    
    #cloud masking
    selected_image = mask_clouds(
        selected_image
    )

    # Return Final Image
    
    return selected_image
