import matplotlib.pyplot as plt
x1=[1,2,3]
y1=[2,5,6]
plt.plot(x1,y1,label="line 1")
x2=[1,3,5]
y2=[3,5,7]
plt.plot(x2,y2,label="line 2")
plt.title("two lines on the graph")
plt.legend()
plt.show()