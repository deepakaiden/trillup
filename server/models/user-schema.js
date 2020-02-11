const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    topic: {
      type: String
    },
    description: {
      type: String
    },
    date: {
      type:  Date
    },
    time: {
      type: Date
    }
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model("User", userSchema);
