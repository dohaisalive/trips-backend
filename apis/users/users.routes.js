const express = require("express");
const passport = require("passport");

const router = express.Router();

const { signup, signin, getUsers ,updateProfile} = require("./users.controllers");

router.post("/signup", signup);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
router.get("/user", getUsers);
router.put("/updateProfile/:userId",updateProfile);

module.exports = router;
