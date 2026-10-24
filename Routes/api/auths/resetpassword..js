const express = require('express')
const bcrypt = require('bcrypt');
const resetPasswordController = require('../../../Controllers/resetPasswordController');
const _ = express.Router()

_.post("/resetpassword", resetPasswordController )

module.exports = _