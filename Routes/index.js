const express = require('express')
const _ = express.Router()
const Allauth = require("./api/index")

_.use("/api/v1", Allauth)

module.exports = _