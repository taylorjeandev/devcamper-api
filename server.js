const express = require("express");

const morgan = require("morgan");
const connectDB = require("./config/database");
const colors = require("colors");
const errorHandler = require("./middleware/error");

//Load environment variables
require("dotenv").config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

//Body Parser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

//Error Handler (should be last piece of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} on PORT ${process.env.PORT}!`
      .yellow.bold
  );
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
});
