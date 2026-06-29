from pydantic import BaseModel      #type:ignore


class MoistureInput(BaseModel):
    ndvi: float