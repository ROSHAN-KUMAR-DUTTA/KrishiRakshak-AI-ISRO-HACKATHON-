def irrigation_recommendation(moisture:float):
    if moisture<20:
        return{"imidiate irrigation requiered"}
    
    elif moisture<35:
        return{"irrigation rcommended"}
    
    return{"no irrigation needed"}