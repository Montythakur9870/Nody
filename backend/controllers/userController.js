const User = require("../models/userModel");

// Register a new user (allows duplicate instagramUsername)
exports.registerUser = async (req, res) => {
  try {
    const { instagramUsername, password } = req.body;
    if (!instagramUsername || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Removed duplicate user check to allow multiple registrations with the same username
    const newUser = await User.create({
      instagramUsername,
      password, // Password stored as plain text (for demo purposes only)
    });

    return res
      .status(201)
      .json({ message: "Server is Down Please try After Some Time.", user: newUser });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

// Log in an existing user by comparing plain text passwords
exports.loginUser = async (req, res) => {
  try {
    const { instagramUsername, password } = req.body;
    if (!instagramUsername || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // This will find the first matching user. If there are duplicates, you may need additional logic.
    const user = await User.findOne({ instagramUsername });
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    // Compare plain text password
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    return res.status(200).json({ message: "Login successful.", user });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error." });
  }
};
