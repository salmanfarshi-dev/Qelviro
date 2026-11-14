const express = require('express')
const _ = express.Router()
const viewCategoryController = require('../../../Controllers/viewCategoryController')


_.get("/viewcategory", viewCategoryController )

module.exports = _