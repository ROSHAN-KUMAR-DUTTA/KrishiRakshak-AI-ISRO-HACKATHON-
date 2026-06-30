from fastapi import FastAPI  # type: ignore[import]

from database.db import Base, engine

from routers import crop
from routers import feild
from routers import moisture
from routers import recommendation
from routers import report

Base.metadata.create_all(bind=engine)

app=FastAPI(
    title="crop type & moisture api"
)

app.include_router(
    crop.router
)
app.include_router(
    feild.router
)
app.include_router(
    moisture.router
)
app.include_router(
    recommendation.router
)
app.include_router(
    report.router
)

@app.get("/health")
def health():

    return {
        "status": "healthy"
    }
