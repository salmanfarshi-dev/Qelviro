const express = require('express')
const _ = express.Router()
const Registration = require("./auths/registration")
const Login = require("./auths/login")
const Otp = require("./auths/otp")

_.use("/authentication", Registration)
_.use("/authentication", Login)
_.use("/authentication" , Otp)

module.exports = _