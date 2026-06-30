from sqlalchemy import Column, Integer, String  #type: ignore
from db import Base  #type: ignore

class Field(Base):
    __tablename__ = "fields"

    id = Column(Integer, primary_key=True,index=True)
    name = Column(String,nullable=False)
    latitude=Column(float)
    longitude=Column(float)
    area=Column(float)
    
class pridiction(Base):
    __tablename__ = "fields"
    id = Column(Integer, primary_key=True,index=True)
    field_id=Column(Integer)
    crop_type=Column(String)
    moisture=Column(float)
    recommendation=Column(String)
    
    