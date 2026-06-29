from fastapi import APIRouter   #type:ignore

from schemas.moisture import MoistureInput
from services.moisture_services import pridicet_moisture
from services.recommendation_services import irrigation_recommendation

router=APIRouter(
    prefix="/recommendation",
    tags=["Recommendation"]
)

@router.post("/irrigation")
def reccomended(
    data:MoistureInput
):
    moisture=pridicet_moisture(
        data.ndvi
    )
    
    reccomendation=irrigation_recommendation(
        moisture
    )
    
    return{
        "moisture":moisture,
        "recommendation":reccomendation
    }