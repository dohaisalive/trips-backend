const express = require("express");

const {
  fetchTrips,
  createTrip,
  updateTrip,
  deleteTrip,
} = require("./trips.controllers");

const router = express.Router();

//fetch
router.get("/", fetchTrips);
//create
router.post("/", createTrip);
//update
router.put("/:tripId", updateTrip);
//delete
router.delete("/:tripId", deleteTrip);

module.exports = router;
