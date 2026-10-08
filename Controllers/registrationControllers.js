// this is a post method

const userSchema = require("../Models/userSchema");
const emialRegex = require("../utiles/emailrejex");
const emailSender = require("../utiles/emailSentder");
const passwordRegex = require("../utiles/passwordRegex");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");


const registrationControllers = async (req, res) => {
  let { username, email, password } = req.body;
  console.log(req.body);

  if (!username) {
    res.send("user name is required");
  } else if (!email) {
    res.send("Email is required");
  } else if (!emialRegex(email)) {
    res.send("valid email");
  } else if (!password) {
    res.send("password is reqired");
  } else if (!passwordRegex(password)) {
    res.send("strong password requied");
  } else {
    let existinguser = await userSchema.find({ email: email });
    if (existinguser.length > 0) {
      res.send("Data Already Existed");
    } else {
      bcrypt.hash(password, 10,   function (err, hash) {
        let otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
          lowerCaseAlphabets: false,
        });

        console.log(otp);

        const data = new userSchema({
          username: username,
          email: email,
          password: hash,
          otp: otp,
        });

        data.save();
        res.send({
          username: data.username,
          email: data.email,
          success: "data sent  successfully",
        });

        // send email

        emailSender(email, otp)
       

       
      });
    }
  }
};

module.exports = registrationControllers;
