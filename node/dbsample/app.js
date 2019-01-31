var express=require('express');
const app=express();
var mongodb=require('mongodb');
var mongoclient=mongodb.MongoClient;
var url="mongodb://127.0.0.1:27017/mydb";



app.set("view engine","ejs")
app.get("/",function(req,res){
    res.render("home")
})
app.get("/insert",function(req,res){
    mongoclient.connect(url,function(err,database){
        var dtb=database.db('mydb');
        var empcol=dtb.collection('employee');
        var data={eid:"e002",name:"adya",salary:15000,location:"ktm"}
        empcol.insert(data,function(err,result){
            if(err){
                res.send("something wend wrong")
            }
            else{
                res.send("inserted successfully")
            }
        })
    })
})
app.listen(8000,function(req,res){
    console.log("server is listening");
})