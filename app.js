const express = require("express");
const connectDb = require("./database");
const tripRoutes = require("./trips/trips.routes");

const app = express();
app.use(express.json());
connectDb();
app.use("/trips", tripRoutes);

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
