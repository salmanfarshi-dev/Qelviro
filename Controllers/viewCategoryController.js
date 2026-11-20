
const Category = require("../Models/categorySchema");

const viewCategoryController = async (req, res) => {
  try {
    const allcategory = await Category.find({})
      .populate("categoryownerid", "username");

    res.status(200).send(allcategory);

  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
};

module.exports = viewCategoryController;
