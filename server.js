const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./config/database");
const colors = require("colors");

//Load environment variables
require("dotenv").config({ path: "./config/config.env" });

//Connect to database
connectDB();

// Body parser
app.use(express.json());

//Route Files
const bootcamps = require("./routes/bootcamps");

//Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

// Dev logging middleware
app.use(logger("dev"));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} on PORT ${process.env.PORT}!`
      .yellow.bold
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
