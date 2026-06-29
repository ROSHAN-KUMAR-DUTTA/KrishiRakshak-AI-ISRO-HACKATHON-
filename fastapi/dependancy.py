from fastapi import FastAPI,Depends  # type: ignore[import]
from sqlalchemy import create_engine,Column,Integer,String  # type: ignore[import]
from sqlalchemy.orm import sessiomaker,declarative_base,session   #type: ignore[import]

web=FastAPI()
db_url="sqlite:///./test.db"

engine=create_engine(
    db_url,
    connect_args={"check_same_thread":False}
)

sessionlocal=sessiomaker(bind=engine)

base=declarative_base()

class todo(base):
    __tablename__="todos"
    id=Column(Integer,primary_key=True,index=True)
    title=Column(String)
    completed=Column(String)
    
base.metadata.create_all(bind=engine)

def get_db():
    db=sessionlocal()
    try:
        yield db
    finally:
        db.close()
        
@web.get("/")
def home(db:session=Depends(get_db)):
    return{
        "message":"db connected successfully"
    }