# =====================================
# Normalize Index
# =====================================

def normalize_index( value , min_value , max_value ):
    """
    Normalize value to 0-1 range.
    """

    normalized = (value - min_value ) / ( max_value - min_value)

    return round(normalized, 2)


# =====================================
# Crop Stress Module
# =====================================


def calculate_crop_stress(
    mean_ndvi,
    mean_ndwi,
    mean_rvi,
    landcover_stats):
    
    """
    Calculate Crop Stress Index using
    NDVI, NDWI and RVI.

    Parameters
    ----------
    mean_ndvi : float

    mean_ndwi : float

    mean_rvi : float

    landcover_stats : dict

    Returns
    -------
    dict
        Stress score and category
    """
    
    # Normalize NDVI
    ndvi_normalized = normalize_index( mean_ndvi , -1 , 1)
    
    # Normalize NDWI
    ndwi_normalized = normalize_index( mean_ndwi ,-1 ,1 )
    
    # Normalize RVI
    rvi_normalized = normalize_index( mean_rvi, 0, 1 )
    
    print("\nNORMALIZED VALUES\n")

    print("NDVI :", ndvi_normalized)

    print("NDWI :", ndwi_normalized)

    print("RVI  :", rvi_normalized)
    
    # Convert Health to Stress

    ndvi_stress = round( 1 - ndvi_normalized, 2 )

    ndwi_stress = round( 1 - ndwi_normalized, 2)

    rvi_stress = round( 1 - rvi_normalized, 2 )
    
    print("\nSTRESS VALUES\n")

    print("NDVI Stress :", ndvi_stress)

    print("NDWI Stress :", ndwi_stress)

    print("RVI Stress  :", rvi_stress)
    
    # Calculate Weighted Stress Score

    stress_score = round(

    (ndvi_stress * 0.40)

    + (ndwi_stress * 0.40)

    + (rvi_stress * 0.20), 2 )
    
    print("\nSTRESS SCORE\n")

    print(stress_score)
    
    # Stress Category

    if stress_score <= 0.25:
        category = "Healthy"

    elif stress_score <= 0.50:
        category = "Mild Stress"

    elif stress_score <= 0.75:
        category = "Moderate Stress"

    else:
        category = "Severe Stress"
    
    # Check if AOI is agricultural
    if landcover_stats["land_type"] != "Agriculture":
        return {  "score": None,  "category": "Not Applicable" }
    
    return { "score": stress_score, "category": category }