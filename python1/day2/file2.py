myfile=open("file.txt")
print(myfile.read())
print("....second.....")
myfile.seek(0)
print(myfile.read())