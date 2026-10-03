// this is a post method

const userSchema = require("../Models/userSchema");
const emialRegex = require("../utiles/emailrejex");
const passwordRegex = require("../utiles/passwordRegex");
const bcrypt = require("bcrypt");

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
      bcrypt.hash(password, 10, function (err, hash) {
        const data = new userSchema({
          username: username,
          email: email,
          password: hash,
        });

        data.save();
        res.send({
          username: data.username,
          email: data.email,
          success: "data sent  successfully",
        });
      });
    }
  }
};

module.exports = registrationControllers;
