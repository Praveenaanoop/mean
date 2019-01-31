var express=require('express');
var emprouter=require('./routes/emprouter');
var prdrouter=require('./routes/prdrouter');
const app=express();
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("home");
})

app.use("/emp",emprouter)
app.use("/pro",prdrouter)
app.listen(8000,function(req,res){
    console.log("server is listening");
})