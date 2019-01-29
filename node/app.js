var express=require('express')
const app=express()
app.get("/",function(req,res){
 res.sendFile(__dirname+"/login.html");   
})
app.get("/home",function(req,res){
    res.sendFile(__dirname+"/home.html")
})
app.get("/home/employee",function(req,res){
  res.sendFile(__dirname+"/employee.html");
})
app.get("/home/employee/newemp",function(req,res){
    res.sendFile(__dirname+"/newemp.html");
})
app.get("/home/employee/delemp",function(req,res){
    res.sendFile(__dirname+"/delemp.html");
})
app.get("/home/product",function(req,res){
    res.sendFile(__dirname+"/product.html");
})
app.get("/home/product/rempro",function(req,res){
    res.sendfile("./rempro.html");
})
app.get("/home/product/newpro",function(req,res){
    res.sendfile("./newpro.html");
    console.log(__dirname);
})
app.listen(8000,function(req,res){
    console.log("server started listening");
});