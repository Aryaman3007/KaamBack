const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const authRoutes = require("./routes/auth");
const passportConfig = require("./config");

dotenv.config();

const app = express();

app.use(express.json());
app.use(passport.initialize());
passportConfig(passport);

//routes
app.use("/v1/auth", authRoutes);

//Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
