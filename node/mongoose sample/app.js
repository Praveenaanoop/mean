var express=require('express');
const app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
var mongoose=require('mongoose');
app.set("view engine","ejs")
var db="mongodb://localhost/mydb";
mongoose.connect(db,function(err){
    console.log(err);
})
var book=require("./models/Book")
const fileUpload=require('express-fileupload')
app.use(fileUpload())
app.get("/",function(req,res){
    res.render("login");
})
app.post("/login",function(req,res){
    let name=req.body.uname;
    res.render("userh",{data:name})
})
app.post("/upload",function(req,res){
    let samfile=req.files.samplefile;
    samfile.mv(__dirname+"/images/"+samfile.name,function(err){
        if(err)
        {
            res.send(err)
        }
        else{
            res.send("uploaded")
        }
    });
})
app.post("/insert",function(req,res){
    var b1=new book();
    b1.bid=req.body.id;
    b1.bname=req.body.name;
    b1.author=req.body.author;
    b1.save(function(err,result){
        if(err){
            res.send(err);
        }
        else{
          res.send("data inserted");
        }
    })
})
app.post("/del",function(req,res){
    book.deleteOne({"bid":req.body.bid},function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.send("deleted successfully")
        }
    })
})
app.post("/view",function(req,res){
    book.find({bid:req.body.bid},function(err,result){
        if (err){
            res.send(err)
        }
        else{
            res.render("viewdata",{data:result})
        }
    })
})
app.post("/edit",function(req,res){
    book.findOne({bid:req.body.id},function(err,bdata){
bdata.bname=req.body.name;
bdata.author=req.body.author;
bdata.save(function(err){
    if(err){
        res.send(err)
    }
    else{
        res.send("updated")
    }
})

    })
})
app.listen(8000,function(req,res){
    console.log("server started");
})