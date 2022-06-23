const connectDb = require("./DB/database");
const express = require("express");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const cors = require("cors");

//routes
const userRoutes = require("./apis/users/users.routes");
const tripRoutes = require("./apis/trips/trips.routes");

//middlewares
const passport = require("passport");
const pathNotFound = require("./middleware/pathNotFound");
const errorHandling = require("./middleware/errorHandling");

const app = express();
connectDb();
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
app.use(cors());

//routes
app.use("/trips", tripRoutes);
app.use(userRoutes);

app.use(pathNotFound);
app.use(errorHandling);

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
