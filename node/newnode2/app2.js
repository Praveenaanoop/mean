var express=require('express')
const app=express();
var bodyparser=require('body-parser')
var sc=require('./samplecode');
var books=[{bid:"b001",Bname:"Nodejs",Author:"google",price:250},{bid:"b002",Bname:"Nodejs",Author:"goole",price:250},{bid:"b003",Bname:"Nodejs",Author:"goole",price:250}]
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")

    app.get("/",function(req,res){
        res.render("login")
        sc.getweb();
    console.log(sc.get);
    })
   
    app.post("/login",function(req,res){
        res.render("home",{data:books})
    })
    app.get("/signup",function(req,res){
        res.render("sinup")
    })
    app.post("/signup",function(req,res){
        res.render("detail",{name:req.body.name,phn:req.body.phn,pswd:req.body.pswd})
    })
    app.listen(8000,function(req,res){
        console.log("server is listening");
    })
