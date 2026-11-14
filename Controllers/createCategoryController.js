const categorySchema = require("../Models/categorySchema");

const createCategoryController = async (req, res) => {
  try {
    let { categoryname , categoryownerid} = req.body;

    if (!categoryname || !categoryname.trim()) {
      return res.status(400).json({
        success: false,
        message: "Category name is required!",
      });
    }

    categoryname = categoryname.trim();

    // Case-insensitive duplicate check
    const existingCategory = await categorySchema.findOne({
      categoryname: {
        $regex: `^${categoryname.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
        $options: "i",
      },
    });

    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "Category already exists!",
      });
    }

    // Create new category
    const category = new categorySchema({
      categoryname: categoryname.toLowerCase(),
      categoryownerid,
    });

    await category.save();

    return res.status(201).json({
      success: true,
      message: "Category created successfully!",
      data: category,
    });
  } catch (error) {
    // MongoDB duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Category already exists!",
      });
    }

    console.log("Category Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};

module.exports = createCategoryController;
