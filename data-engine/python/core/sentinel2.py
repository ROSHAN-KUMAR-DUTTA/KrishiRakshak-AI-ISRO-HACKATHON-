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
    
    max_fallback_days = 7
    
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
    
    print( "\nImages Found sentinel2:",collection_size)

    # No image found
    if collection_size == 0:
        raise ValueError(
            "No Sentinel-2 images found for the selected AOI and date range.")

    
    image_list = (
        collection
        .sort("system:time_start", False)
        .toList(collection_size) )
    
    latest_image = ee.Image(image_list.get(0))

    latest_date = (
    ee.Date(
        latest_image.get("system:time_start"))
    .millis()
    .getInfo() )
    
    # =====================================
    # Find Latest Usable Image
    # =====================================

    for  i in range(collection_size):

        selected_image = ee.Image(image_list.get(i) )
        
        # Image Date
        selected_date = (
        ee.Date(
            selected_image.get("system:time_start") )
        .format("YYYY-MM-dd")
        .getInfo() )
        
        current_date = (
        ee.Date(selected_image.get("system:time_start"))
        .millis()
        .getInfo())

        days_difference = (latest_date - current_date ) / (1000 * 60 * 60 * 24)
        
        selected_image = mask_clouds( selected_image)
        
        if days_difference > max_fallback_days:
            print(  "Maximum fallback limit reached.")
            break
        
        valid_pixels = (
            selected_image.select("B4")
            .reduceRegion(
            reducer=ee.Reducer.count(),
            geometry=aoi,
            scale=10,
            maxPixels=1e9 )
            .getInfo() )
        
        pixel_count = valid_pixels.get("B4", 0)
        if pixel_count > 0:
            print("Selected Image:", selected_date)
            return selected_image, selected_date
        
    raise ValueError(
    "No usable Sentinel-2 image found after cloud masking.")
        
    # =====================================
    # Select Latest Usable Image
    # =====================================

    # selected_image = (
    #     collection
    #     .sort(
    #         "system:time_start",
    #         False
    #     )
    #     .first() )

    
    # #cloud masking
    # selected_image = mask_clouds(
    #     selected_image
    # )

    # # Return Final Image
    
    # return selected_image
