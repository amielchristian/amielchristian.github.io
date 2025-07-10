import os

for file in os.listdir("./src/data/works"):
    try:
        os.mkdir(f'./public/works/{file.split('.')[0]}')
    except:
        print("Directory exists.")