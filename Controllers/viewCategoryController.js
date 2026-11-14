const Category = require("../Models/categorySchema")

const viewCategoryController= async (req,res)=>{

let allcategory = await Category.find({})
res.send(allcategory)


}

module.exports = viewCategoryController