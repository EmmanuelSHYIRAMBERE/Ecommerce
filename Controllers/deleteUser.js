const { User } = require("../models/userModel");

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete({ _id: id });

    console.log(user);

    if (!user) {
      return res
        .status(404)
        .json(`User with this email: ${req.body.email} not found`);
    }

    res.status(201).json({
      message: "A new user deleted successfully",
      user,
    });
  } catch (error) {
    console.log("Error in deleting user", error);
  }
};

module.exports = { deleteUser };
