var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var BookSchema=new Schema({bid:{type:Number},bname:{type:String},author:{type:String},image:{type:String}});
module.exports=mongoose.model("Book",BookSchema);