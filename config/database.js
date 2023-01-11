const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline.bold);
};
mongoose.set("strictQuery", true);

module.exports = connectDB;
