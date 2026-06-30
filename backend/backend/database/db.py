from sqlalchemy import create_engine    #type: ignore
from sqlalchemy.orm import declarative_base, sessionmaker   #type: ignore

Base = declarative_base()

db_url="sqlite:///./crop.db"

engine=create_engine(
    db_url,
    connect_args={"check_same_thread":False}
)

sessionlocal=sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

