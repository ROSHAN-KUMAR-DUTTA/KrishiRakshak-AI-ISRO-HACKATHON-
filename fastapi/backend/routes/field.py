from fastapi import Depends,APIRouter #type: ignore
from sqlalchemy.orm import Session  #type:ignore

from dependencies.database import get_db

from database.modle import Field

from schemas.field import createfield

router=APIRouter(
    prefix="/fields",
    tags=["Fields"]
)

@router.post("/")
def createfield(
    field:createfield,
    db:Session=Depends(get_db)
):
    db_field = Field(
        name=field.name,
        latitude=field.latitude,
        longitude=field.longitude,
        area=field.area
    )
    db.add(db_field)
    db.commit()
    db.refresh(db_field)
    return {db_field}


@router.get("/")
def get_field(
    db:Session=Depends(get_db)
):
    return {
        db.query(Field).all()
    }
    
@router.get("/{field_id}")
def get_field(
    field_id:int,
    db:Session=Depends(get_db)
):
    db_field = db.query(Field).filter(Field.id == field_id).first()
    if not db_field:
        return {"detail": "field not found"}
    return db_field