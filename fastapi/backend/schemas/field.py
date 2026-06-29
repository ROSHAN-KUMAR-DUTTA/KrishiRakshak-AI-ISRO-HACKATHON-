from pydantic import BaseModel  #type: ignore

class createfield(BaseModel):
    name:str
    latitude:float
    longitude:float
    area:float
    
class fieldresponse(createfield):
    id:int
    
    class config:
        from_attribute=True