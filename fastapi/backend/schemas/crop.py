from pydantic import BaseModel  #type:ignore

class cropinput(BaseModel):
    ndvi:float
    temperature:float
    rainfall:float
