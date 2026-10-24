const express = require('express')
const _ = express.Router()
const Registration = require("./auths/registration")
const Login = require("./auths/login")
const Otp = require("./auths/otp")
const Forgetpassword = require("./auths/forgetpassword")
const Resetpassword = require ("./auths/resetpassword..js")

_.use("/authentication", Registration)
_.use("/authentication", Login)
_.use("/authentication" , Otp)
_.use("/authentication" , Forgetpassword)
_.use("/authentication" , Resetpassword)

module.exports = _