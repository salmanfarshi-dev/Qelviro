const userSchema = require("../Models/userSchema");
const emialRegex = require("../utiles/emailrejex");
const emailSender = require("../utiles/emailSentder");
const passwordRegex = require("../utiles/passwordRegex");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");

const registrationControllers = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username) {
      return res.send("user name is required");
    }

    if (!email) {
      return res.send("Email is required");
    }

    if (!emialRegex(email)) {
      return res.send("valid email");
    }

    if (!password) {
      return res.send("password is required");
    }

    if (!passwordRegex(password)) {
      return res.send("strong password required");
    }

    const existinguser = await userSchema.findOne({ email });

    if (existinguser) {
      return res.send("Data Already Existed");
    }

    const hash = await bcrypt.hash(password, 10);

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });

    const token = await emailSender(email, otp);

    const data = new userSchema({
      username,
      email,
      password: hash,
      otp,
    });

    await data.save();

    return res.send({
      username: data.username,
      email: data.email,
      success: "data sent successfully",
      token: token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Registration failed",
    });
  }
};

module.exports = registrationControllers;
