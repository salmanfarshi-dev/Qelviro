const express = require('express')
const _ = express.Router()
const Authentication = require("./api/index")

_.use(`${process.env.API_KEY}`, Authentication)

module.exports = _