var express=require('express')
const app=express()
app.set("view engine","ejs")
var bodyparser=require(bodyparser)
app.use(bodyparser.urlencoded({extended:true}))
var mongoose=require(mongoose)
var db=" mongodb://localhost/myweb"
mongoose.connect(db,function(err) {
console.log(err)    
})
//var dress=require("./models/object/")
//const fileUpload=require('express-fileupload')
//app.use(fileUpload())
app.get("/",function(req,res){
    res.render("home")
})
app.listen(3000,function(req,res){
    console.log("serever started")
})