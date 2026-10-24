
const UserSchema = require("../Models/userSchema");
const bcrypt = require("bcrypt");

const resetPasswordController = async (req, res) => {
  try {
    const { email, newpassword } = req.body;

    if (!email || !newpassword) {
      return res.status(400).send({
        error: "Email and new password are required",
      });
    }

    if (newpassword.length < 6) {
      return res.status(400).send({
        error: "Password must be at least 6 characters",
      });
    }

    const existingUser = await UserSchema.findOne({ email });

    if (!existingUser) {
      return res.status(404).send({
        error: "Account not found",
      });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);

    existingUser.password = hashedPassword;
    await existingUser.save();

    return res.status(200).send({
      success: "Password reset successfully",
    });
  } catch (error) {
    console.log("Reset Password Error:", error);

    return res.status(500).send({
      error: "Something went wrong. Please try again.",
    });
  }
};

module.exports = resetPasswordController;
