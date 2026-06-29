def predict_crop(
    ndvi: float,
    temperature: float,
    rainfall: float
):
    
    if ndvi>0.7:
        return{"Rice"}
    
    elif ndvi>0.5:
        return{"Wheat"}
    
    return{"Maize"}