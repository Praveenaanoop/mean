var express=require('express');
const app=express();
var mongodb=require('mongodb');
var mongoclient=mongodb.MongoClient;
var url="mongodb://127.0.0.1:27017/mydb";
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")
app.get("/",function(req,res){
    res.render("emphome");
})
app.get("/newemp",function(req,res){
    res.render("home");
})
app.get("/edit",function(req,res){
    mongoclient.connect(url,function(err,database){
        if(err){
            res.send("error");
        }
        else{
            var dtb=database.db('mydb');
    var empcol=dtb.collection('employee');
    empcol.find({},{id:1}).toArray(function(err,tbdata){
      if(err){
          res.send(err);
      }
      else{
        res.render("empedit",{data:tbdata});
      }
    })
        }
    })
})
app.get("/view",function(req,res){
   mongoclient.connect(url,function(err,database){
       if(err){console.log(err);}

else{
    var dtb=database.db('mydb');
    var empcol=dtb.collection('employee');
    empcol.find().toArray(function(err,tbdata){
      res.render("empview",{data:tbdata});
      console.log(tbdata);
    })
}    })
})
app.get("/del",function(req,res){
    mongoclient.connect(url,function(err,database){
        if(err){
            console.log(err);
        }
        else{
            var dtb=database.db('mydb');
            var empcol=dtb.collection('employee');
            empcol.find({},{name:1}).toArray(function(err,tbdata){
                res.render("empdel",{data:tbdata});
            })
        }
    })
})
app.post("/empty",function(req,res){
    mongoclient.connect(url,function(err,database){
        var dtb=database.db('mydb');
        var empcol=dtb.collection('employee');
        empcol.update({id:parseInt(req.body.id)},{$set:{name:req.body.name,salary:req.body.sal}})
        if(err)
        {
            res.send(err);
        }
        else{
            res.send("succsefully updated");
        }
    })
})
app.post("/empedit",function(req,res){
    console.log(req.body.editbox);
    mongoclient.connect(url,function(err,database){
        var dtb=database.db('mydb');
        var empcol=dtb.collection('employee');
        empcol.find({id:parseInt(req.body.editbox)}).toArray(function(err,tbdata){
            if(err)
            {
                res.send("error");
            }
            else{
                res.render("empty",{data:tbdata});
                console.log(tbdata);
            }
        })
    })
})
app.post("/empdel",function(req,res){
    console.log(req.body.delbox);
    mongoclient.connect(url,function(err,database){
    var dtb=database.db('mydb');
    var empcol=dtb.collection('employee');
    empcol.deleteOne({id:parseInt(req.body.delbox)},function(err,result){
        if(err){
            res.send("error");
        }
        else{
            res.send("successfully deleted");
        }
    })    
    })
})
app.post("/insert",function(req,res){
    mongoclient.connect(url,function(err,database){
        var dtb=database.db('mydb');
        var empcol=dtb.collection('employee');
        var data={"id":req.body.id,"name":req.body.emp,"salary":req.body.sal}
    
        empcol.insert(data,function(err,result){
            if(err){
                res.send("something went wrong");
            }
            else{
                res.send("inserted successfully");
            }
        })
    })
})
app.listen(8000,function(req,res){
    console.log("server is listening");
})