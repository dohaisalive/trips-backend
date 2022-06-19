const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  title: { type: Number },
  description: { type: String },
  image: { type: String, default: "" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Trip", TripSchema);
