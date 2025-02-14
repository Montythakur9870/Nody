// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    instagramUsername: {
      type: String,
      required: true,
      // trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
