const { User } = require("../../models/userModel");

const Login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res
      .status(404)
      .json(`User withis email: ${req.body.email} not found`);
  }

  if (user.password !== req.body.password) {
    return res.status(404).json(`Password input is not correct`);
  }

  res.status(201).json({
    message: "Authorised",
    user,
  });
};

module.exports = { Login };
