const mongoose = require("mongoose");

const mongodbconfig = () => {
 mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jyqbbup.mongodb.net/${process.env.DB_NAME}?appName=Cluster0`)
  .then(() => console.log('data base Connected!'));
};

module.exports = mongodbconfig;