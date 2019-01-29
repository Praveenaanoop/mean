var express=require('express')
const app=express()
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){
 res.sendFile(__dirname+"/login.html");   
})
app.post("/home",function(req,res){
    var user=req.body.user;
    var pass=req.body.pswd;
  if(user=="admin" && pass=="1234")
  {
    res.sendFile(__dirname+"/home.html")
  }
  else
   {
res.redirect("./")
   }
})
app.get("/sign",function(req,res){
    res.send  
   })
app.listen(8000,function(req,res){
    console.log("server started listening");
});