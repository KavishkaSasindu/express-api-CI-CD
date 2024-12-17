const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/userRoutes");

dotenv.config();

const PORT = 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("DB is connected");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.use(userRoutes);
