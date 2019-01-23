username=input("enter the username")
password=input("enter the password")
file=open("login1.txt","r")
uname=file.readline()
pwd=file.readline()
print(username)
print(password)
print(uname)
print(pwd)
uname=uname.rstrip("\n")
pwd=pwd.rstrip("\n")
if username==uname and password==pwd:
 print("successful")
else:
 print("unsuccessful")

