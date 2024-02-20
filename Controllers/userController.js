const { User } = require("../models/userModel");

const registerUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res
      .status(404)
      .json(`User with this email: ${req.body.email} already exist`);
  }
  const newUser = await User.create(req.body);

  console.log("newUser", newUser);

  res.status(201).json({
    message: "A new user created successfully",
    newUser,
  });
};
const getUsers = async (req, res) => {
  const Users = await User.find({});

  console.log("newUser", Users);

  res.status(201).json({
    message: "Success",
    Users,
  });
};

module.exports = { registerUser, getUsers };

// import { User } from "../models/userModel";

// export defaultconst regiterUser = async (req, res) => {
//   const newUser = await User.create(req.body);

//   res.status(201).json({
//     message: "A new user created successfully",
//     newUser,
//   });
// };
