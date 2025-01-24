const jwt=require('jsonwebtoken')
const secret='khushirana@1412'

function setUser(user){
  return jwt.sign({
   _id:user._id,
   email:user.email,
   role:user.role
  },secret) 
}

function getUser(token){
   if(!token) return null;
   try{
      return jwt.verify(token,secret);

   } catch(error){
      throw error;
   }
}

module.exports={getUser,setUser};