var express=require('express');
const app=express();
var mongodb=require('mongodb');
var mongoclient=mongodb.MongoClient;
var url="mongodb://127.0.0.1:27017/mydb";
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")
app.get("/",function(req,res){
    res.render("home")
})


app.post("/insert",function(req,res){
    mongoclient.connect(url,function(err,database){
        var dtb=database.db('mydb');
        var empcol=dtb.collection('employee');
        var data={"name":req.body.emp,"salary":req.body.sal}
    
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