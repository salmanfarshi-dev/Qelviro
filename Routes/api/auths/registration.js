const express = require('express')
const registrationControllers = require('../../../Controllers/registrationControllers')
const secureapi = require('../../../middleware/secureapi')
const _ = express.Router()

_.post("/registration",secureapi,  registrationControllers )

module.exports = _