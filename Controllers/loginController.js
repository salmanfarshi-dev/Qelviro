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
      bcrypt.compare(
        password,
        exsitingdata[0].password,
        function (err, result) {
          if (err) {
            res.send({ error: "Invalid Creandiential" });
          } else {
            if (result) {
              if (exsitingdata[0].emailVerification) {
                  res.send({
                     success: "Login successfully" ,
                     id: exsitingdata[0]._id,
                     email: exsitingdata[0].email,
                     username: exsitingdata[0].username,
                     emailVerification: exsitingdata[0].emailVerification,
                    });
              } else {
                res.send({ error: "Email verification failed" });
              }
            } else {
              res.send({ error: "Invalid Creandiential" });
            }

            console.log(exsitingdata);
            
          }
        },
      );
    } else {
      res.send({ error: "Invalid Creandiential" });
    }
  }
};

module.exports = logincoltrollers;
