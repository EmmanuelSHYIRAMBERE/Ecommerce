const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullNames: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNUmber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
      default: "user",
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
