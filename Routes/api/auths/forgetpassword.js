const express = require('express')
const bcrypt = require('bcrypt');
const forgetpasswordController = require('../../../Controllers/forgetpasswordController')
const _ = express.Router()

_.post("/forgetpassword", forgetpasswordController )

module.exports = _