const express = require("express");  
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() =>
console.log('DB connected'))

mongoose.connection.on('Error',err => {
   console.log('DB connection error: ${err.message}');
});

// Middleware
app.use(morgan("dev"));
app.use(express.json());
//app.use("/api/contacts", require("./routes/contactRoutes"));
//app.use("/", require("./controllers/authController"));
//app.use("/api/auth", require("./routes/auth"));
//app.use("api/auth", require("./routes/users"));
