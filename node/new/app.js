var express=require('express')
const app=express()
app.set("view engine","ejs")
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
var mongoose=require('mongoose')
var db="mongodb://localhost/mybook";
mongoose.connect(db,function(err){
    console.log(err);
})
var book=require("./models/object")
const fileUpload=require('express-fileupload')
app.use(fileUpload())
app.get("/",function(req,res){
    res.render("home")
})

app.post("/insert",function(req,res){
    var b1=new book();
    b1.bid=req.body.id;
    b1.bname=req.body.name;
    b1.author=req.body.author;
    let samfile=req.files.samplefile;
    b1.image=samfile.name;
    samfile.mv(__dirname+"/public/images/"+samfile.name)
    b1.save(function(err,result){
        if(err){
            res.send(err);
        }
        else{
          res.send("data inserted");
        }
    })
})
app.post("/view",function(req,res){
    book.find({},function(err,result){
        if (err){
            res.send(err)
        }
        else{
            res.render("viewdata",{data:result})
        }
    })
})
app.listen(8000,function(req,res){
    console.log("server started");
})