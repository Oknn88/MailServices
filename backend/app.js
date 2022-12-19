const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/allRoutes");

const app = express();

dotenv.config();
app.use(express.json()); // to accept json data

app.use("/", routes);

const PORT = process.env.PORT;

const server = app.listen(
  PORT || 4000,
  console.log(`Server running on PORT ${PORT}...`)
);
