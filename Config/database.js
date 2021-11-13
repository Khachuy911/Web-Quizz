const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.URL_MONGOOSE);
    console.log("Connect is successfully !");
  } catch (error) {
    console.log("Connect is fail !!");
  }
}

module.exports = connect;
