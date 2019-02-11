var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var DressSchema=new Schema({did:{type:Number},dtype:{type:String},designer:{type:String},image:{type:String}});
module.exports=mongoose.model("dress",DressSchema);