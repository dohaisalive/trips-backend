const express = require("express");
const passport = require("passport");

const {
  signup,
  signin,
  getUsers,
  updateProfile,
} = require("./users.controllers");

const router = express.Router();

router.post("/signup", signup);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
router.get("/user", getUsers);
router.put(
  "/updateProfile",
  passport.authenticate("jwt", { session: false }),
  updateProfile
);

module.exports = router;
