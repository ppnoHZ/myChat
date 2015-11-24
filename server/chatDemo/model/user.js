var mongoose=require('mongoose');
var Account=new mongoose.Schema({
	userName:{type:String,require:true},
	nickName:{type:String},
	password:{type:String},
	sex:{type:Boolean,default:true}
})
module.exports=mongoose.model('user',Account);