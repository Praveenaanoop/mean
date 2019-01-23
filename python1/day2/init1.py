class Car:
    model="seden"
    def __init__(self,model,color):
        self.model=model
        self.color=color
mycar1=Car("toyota","green")
mycar2=Car("honda","light blue")
mycar3=Car("ford","red")
print(mycar1.model,mycar1.color)

