// this is a post method

const userSchema = require("../Models/userSchema");



const otpController = async (req, res) => {
  let { otp , email} = req.body;
  let existingdata = await userSchema.find({email:email})
   

   if(existingdata.length > 0 ){
    if(existingdata[0].otp == otp){

      await userSchema.findOneAndUpdate({email:email}, {otp: ""})
      await userSchema.findOneAndUpdate({email:email}, {emailVerification: true})
    res.send({success:"OTP Match"})
   }else{
    res.send({error:"OTP Not Match"})
   }
   }else{
    res.send({error:"Invalid Creandiential"})
   }
  
};

module.exports = otpController;
