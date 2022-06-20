const Trip = require("../../models/Trip");

exports.fetchTrips = async (req, res) => {
  const trips = await Trip.find();
  res.status(200).json(trips);
};

exports.createTrip = async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(501).json(error);
  }
};

exports.updateTrip = async (req, res) => {
  try {
    const foundTrip = await Trip.findById(req.params.tripId);
    if (foundTrip) {
      await Trip.findByIdAndUpdate(req.params.tripId, req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Trip deosn't exist!" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const foundTrip = await Trip.findById(req.params.tripId);
    if (foundTrip) {
      await Trip.remove(foundTrip);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Trip deosn't exist!" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
