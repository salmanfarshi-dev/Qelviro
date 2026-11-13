const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({

    categoryname: {
        type: String,
        required: true,
        unique: true
    },

    categoryid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userlists"
    }

})


module.exports = mongoose.model("Category", categorySchema)