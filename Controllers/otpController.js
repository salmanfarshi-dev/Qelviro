// this is a post method

const userSchema = require("../Models/userSchema");



const otpController = async (req, res) => {
  let { otp , email} = req.body;
  let existingdata = await userSchema.find({email:email})
   

   if(existingdata.length > 0 ){
    if(existingdata[0].otp == otp){
    res.send("data paoa gece")
   }else{
    res.send("data paoa jai nai")
   }
   }else{
    res.send("Invalid Creandiential")
   }
  
};

module.exports = otpController;
