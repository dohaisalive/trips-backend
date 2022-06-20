const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATION } = require("../../config/keys");

exports.signin = async (req, res) => {
  try {
    const payload = {
      _id: req.user._id,
      username: req.user.username,
      exp: Date.now() + JWT_EXPIRATION,
    };
    const token = jwt.sign(payload, JWT_SECRET);

    res.json({ token: token });
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    const payload = {
      _id: newUser._id,
      username: newUser.username,
      exp: Date.now() + JWT_EXPIRATION,
    };
    const token = jwt.sign(payload, JWT_SECRET);

    res.json({ token: token });
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.userId);
    if (foundUser) {
      await User.findByIdAndUpdate(req.params.userId, req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "User deosn't exist!" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
