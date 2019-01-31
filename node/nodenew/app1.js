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
  if(pass=="1234")
  {
    res.sendFile(__dirname+"/home.html")
  }
  else
   {
res.redirect("./")
   }
})
app.post("/form",function(req,res){
    res.send("<html><body>WELCOME"+req.body.user+"</body></html>")
})
app.post("/signup",function(req,res){
    res.send("<html><body>name:"+req.body.name+"<br> phone:"+req.body.phn+"<br> password:"+req.body.pswd+"</body></html>")
})
app.get("/sign",function(req,res){
    res.sendFile(__dirname+"/sign.html")
   
   })
   app.get("/home",function(req,res){
    res.sendFile(__dirname+"/login.html")
   
   })
app.listen(8000,function(req,res){
    console.log("server started listening");
});