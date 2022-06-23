const connectDb = require("./DB/database");
const express = require("express");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const cors = require("cors");

//routes
const userRoutes = require("./apis/users/users.routes");
const tripRoutes = require("./apis/trips/trips.routes");

const app = express();
connectDb();
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
app.use(cors());

app.use("/trips", tripRoutes);
app.use(userRoutes);

//all routes should be before this
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
