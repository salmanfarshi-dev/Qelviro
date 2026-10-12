const express = require('express')
const otpController = require('../../../Controllers/otpController')
const _ = express.Router()

_.post("/otp", otpController )

module.exports = _