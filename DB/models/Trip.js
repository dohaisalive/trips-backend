const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String, default: "" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  favorite:{type:String,default: "heart-outlined" },
});

module.exports = mongoose.model("Trip", TripSchema);
