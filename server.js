const express = require("express");
const dotenv = require("dotenv");
const app = express();
//Load environment variables
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} mode on Port ${PORT}`
  )
);
