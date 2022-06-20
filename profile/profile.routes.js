const express = require("express");

const {
  fetchTrips,
  createTrip,
  updateTrip,
  deleteTrip,
} = require("./profile.controllers");

const router = express.Router();

//fetch
router.get("/", fetchTrips);
//create
router.post("/", createTrip);
//update
router.put("/:accountId", updateTrip);
//delete
router.delete("/:accountId", deleteTrip);

module.exports = router;
