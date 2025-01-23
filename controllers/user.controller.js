const User=require('../models/user.model');
const {v4:uuid}=require('uuid');
const {setUser}=require('../services/auth.service')


async function handleUserSignup(req,res,next){
if(!req.body) {
   return res.json({error:error.array()});
}

const {name,email,password}=req.body;
await User.create({
   name,
   email,
   password
})

return res.render('/');
}

async function handleUserLogin(req,res){
      const {email,password}=req.body;
      const user=await User.findOne({email,password});

      if(!user) return res.render('login',{
         error:"Invalid Username or Password"
      })
      const sessionId=uuidv4();
      setUser(sessionId,user);
      res.cookie('uid',sessionId); 
     return res.redirect('/')

}

module.exports={handleUserSignup,handleUserLogin};