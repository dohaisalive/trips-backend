const express = require("express");
const connectDb = require("./database");
const app = express();



connectDb();

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
