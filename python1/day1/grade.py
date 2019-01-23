def grade(m1,m2,m3,m4,m5):
    avg=(m1+m2+m3+m4+m5)/5
    print(avg)
    if avg>=90 and avg<=100:
     print("A+")
    elif avg>=80 and avg<90:
     print("A")
    elif avg>=70 and avg<80:
     print("B+")
    elif avg>=60 and avg<70:
     print("B")
    elif avg>=50 and avg<60:
     print("C+")
    elif avg>=40 and avg<50:
     print("C")
    elif avg<40:
     print("D")
    return
m1=int(input("enter m1"))    
m2=int(input("enter m2"))  
m3=int(input("enter m3"))  
m4=int(input("enter m4"))  
m5=int(input("enter m5")) 
grade(m1,m2,m3,m4,m5) 