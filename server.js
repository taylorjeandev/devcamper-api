const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./config/database");

//Load environment variables
require("dotenv").config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route Files
const bootcamps = require("./routes/bootcamps");

//Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} on PORT ${process.env.PORT}!`
  );
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server & exit process
  server.close(() => process.exit(1));
});
