const express = require('express')
const bcrypt = require('bcrypt');
const logincoltrollers = require('../../../Controllers/loginController')
const _ = express.Router()

_.post("/login", logincoltrollers )

module.exports = _