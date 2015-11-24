var express = require('express');
var router = express.Router();
var account=require('../model/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/users',function(req,res,next){
	res.send({status:'ok'});
})


router.post('/register',function(req,res,next){

	var userName=req.body.userName;
	var password=req.body.password;
	var nickName=req.body.nickName;
	console.log(account)
	var newAccount= new account({
		userName:userName,
		password:password,
		nickName:nickName
	});
	newAccount.save(function(error){
		if(error)
		{
			// res.
			res.status(500).send({error:error});
		}else{
			res.status(200).send({register:'ok'});
		}
	})
})

module.exports = router;
