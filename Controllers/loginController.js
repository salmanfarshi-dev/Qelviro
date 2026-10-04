// this is a post method

const userSchema = require("../Models/userSchema");
const emialRegex = require("../utiles/emailrejex");
const passwordRegex = require("../utiles/passwordRegex");
const bcrypt = require("bcrypt");

const logincoltrollers = async (req, res) => {
  let { email, password } = req.body;

  if (!email) {
    res.send("Email is required");
  } else if (!emialRegex(email)) {
    res.send("valid email");
  } else if (!password) {
    res.send("password is reqired");
  } else if (!passwordRegex(password)) {
    res.send("strong password requied");
  } else {
    let exsitingdata = await userSchema.find({ email: email });
    if (exsitingdata.length > 0) {
      bcrypt.compare(password, exsitingdata[0].password, function (err, result) {
       if(err){

         res.send({ error: "Invalid Creandiential" });
        }else{
          if(result){
            res.send({success: "Login successfully"})
          }else{
          res.send({ error: "Invalid Creandiential" });

        }
       
        
       }
      });
    
    } else {
      res.send({ error: "Invalid Creandiential" });
    }
  }
};

module.exports = logincoltrollers;
