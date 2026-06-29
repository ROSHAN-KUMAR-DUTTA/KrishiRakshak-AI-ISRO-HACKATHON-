from database.db import sessionlocal

def get_db():
    dbs=sessionlocal()
    try:
        yield dbs
    finally:
        dbs.close()
