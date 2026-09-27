const express = require('express')
const logincoltrollers = require('../../../Controllers/loginController')
const _ = express.Router()

_.get("/login", logincoltrollers )

module.exports = _