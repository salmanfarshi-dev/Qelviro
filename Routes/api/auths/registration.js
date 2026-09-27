const express = require('express')
const registrationControllers = require('../../../Controllers/registrationControllers')
const _ = express.Router()

_.post("/registration", registrationControllers )

module.exports = _