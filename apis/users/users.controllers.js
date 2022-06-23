const User = require("../../DB/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATION } = require("../../config/keys");

exports.signin = async (req, res, next) => {
  try {
    const payload = {
      _id: req.user._id,
      username: req.user.username,
      exp: Date.now() + JWT_EXPIRATION,
    };
    const token = jwt.sign(payload, JWT_SECRET);

    res.json({ token: token });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
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
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const foundUser = await User.findById(userId);
    if (foundUser) {
      await User.findByIdAndUpdate(userId, req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "User deosn't exist!" });
    }
  } catch (error) {
    next(err);
  }
};
