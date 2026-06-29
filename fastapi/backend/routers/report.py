from fastapi import APIRouter   #type:ignore

router=APIRouter(
    prefix="/report",
    tags=['report']
)

@router.get("/{field_id}")
def report(
    field_id:int
):
    return {
        "field_id": field_id,
        "crop_type": "Rice",
        "soil_moisture": 32.5,
        "recommendation": "Irrigation recommended"
    }