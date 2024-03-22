// dotenv INIT
require("dotenv").config();

// EXPRESS INIT
const express = require("express");
const app = express();

// MODULE IMPORTS
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// ROUTES INITIALIZATION

// USER ROUTES
const signup = require("./routes/User/signup");
const login = require("./routes/User/login");
const profile = require("./routes/User/profile");
const logout = require("./routes/User/logout");

// WORKLOAD ROUTES

// PORT NUMBER INIT
const PORT = process.env.PORT_NUMBER || 8000;

// CORS POLICY
app.use(
  cors({
    credentials: true,
    origin: process.env.SERVER_URL,
  })
);

// To Store data in cookie
app.use(cookieParser());

// For extracting json from client
app.use(express.json());

// MongoDB URL
const mongoURL = process.env.MONGO_URL;

// Connecting with MongoDB
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
//   var db = mongoose.connection;

// REQUESTS
app.get("/", () => res.send("Server is working fine"));
app.post("/signup", signup);
app.post("/login", login);
app.get("/profile", profile);
app.post("/logout", logout);

// LISTEN FUNCTION
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
