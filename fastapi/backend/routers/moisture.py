from fastapi import APIRouter   #type:ignore

from schemas.moisture import MoistureInput

from services.moisture_services import pridicet_moisture

router = APIRouter(
    prefix="/moisture",
    tags=["Moisture"]
)

@router.post("/pridict")
def moisture_pridiction(
    data:MoistureInput
):
    moisture=pridicet_moisture(
        data.ndvi
    )
    return {
        "soil moisture":moisture
    }
