const express = require('express')
const _ = express.Router()
const createCategoryController = require('../../../Controllers/createCategoryController')


_.post("/createcategory", createCategoryController )

module.exports = _