class employee:
   name="akash"
   age=28
   basicPay=21000
   HRA=8000
   DA=60/100*basicPay
   def CalculateSalary(self):
        return self.basicPay+self.HRA+self.DA
myEmployee=employee()
print("monthly salary of",myEmployee.name,"is",myEmployee.CalculateSalary()) 