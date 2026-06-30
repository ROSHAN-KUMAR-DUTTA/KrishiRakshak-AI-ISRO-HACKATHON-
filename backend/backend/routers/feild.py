from fastapi import APIRouter   #type: ignore

router = APIRouter()

@router.get("/")
def get_fields():
    return []