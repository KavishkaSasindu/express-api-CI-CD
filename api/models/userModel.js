const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  validID: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user_collection", UserSchema);

module.exports = UserModel;
