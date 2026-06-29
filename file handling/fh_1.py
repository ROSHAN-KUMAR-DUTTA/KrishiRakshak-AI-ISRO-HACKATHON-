def check_for_line():
    word="programming"
    data=True
    line=1
    with open("practice","r") as f:
        while data:
            data = f.readline()
            if(word in data):
                print(line)
                return
            line+=1
    return -1

check_for_line()            