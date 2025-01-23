const mongoose = require("mongoose");

function connectTodb(url) {
  mongoose
    .connect(url)
    .then(() => console.log("Db is connect"))
    .catch((error) => {
      console.log("error", error);
    });
}

module.exports =connectTodb;
