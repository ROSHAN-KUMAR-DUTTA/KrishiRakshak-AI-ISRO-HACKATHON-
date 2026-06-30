from fastapi import APIRouter     #type:ignore
from schemas.crop import cropinput
from services.cropservices import predict_crop
router=APIRouter(
    prefix="/crop",
    tags=["Crop"]
)

@router.post("/pridict")
def crop_prediction(data:cropinput):
    crop = predict_crop(
        data.ndvi,
        data.temperature,
        data.rainfall
    )
    
    return {
        "crop type":crop,
        "confidence":0.92
    }