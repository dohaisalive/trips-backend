const express = require("express");
const passport = require("passport");

const {
  fetchTrips,
  createTrip,
  updateTrip,
  deleteTrip,
  updateFav
} = require("./trips.controllers");

const router = express.Router();

//fetch
router.get("/", fetchTrips);
//create
router.post("/", passport.authenticate("jwt", { session: false }), createTrip);
//update
router.put(
  "/:tripId",
  passport.authenticate("jwt", { session: false }),
  updateTrip
);
router.put("/updateFav/:tripId", updateFav)
//delete
router.delete(
  "/:tripId",
  passport.authenticate("jwt", { session: false }),
  deleteTrip
);

module.exports = router;
