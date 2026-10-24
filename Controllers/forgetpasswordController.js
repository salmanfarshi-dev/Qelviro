const UserScheama = require('../Models/userSchema')
const forgetPasswordController= async (req,res)=>{
    let {findemail}=req.body
   let singleuser = await UserScheama.find({email:findemail})

   if(singleuser.length>0){
       res.send({
        success:"found data",
        email:singleuser[0].email

       })
   }
   else{
      res.send({error:"not found"})

   }


   

}
module.exports = forgetPasswordController;