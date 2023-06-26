const express = require("express");  
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() =>
console.log('DB connected'))

mongoose.connection.on('Error',err => {
   console.log('DB connection error: ${err.message}');
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
   console.log(`Server started on port ${port}`);
});


// Middleware
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());


app.use("/api/auth", require("./routes/auth"));
app.use("/api/auth", require("./routes/commande"));
app.use("/api/auth", require("./routes/menu_jour"));
app.use("/api/auth", require("./routes/plat"));
app.use("/api/auth", require("./routes/menu_semaine"));
app.use("/api/auth", require("./routes/detail_cmde"));


//app.listen(port, () => {
// console.log('A node API is listen on the port : ${port}');
//});
//const port = 8000;
//app.use("/api/contacts", require("./routes/contactRoutes"));
//app.use("/", require("./controllers/authController"));
//app.use("/api", require("./routes/menu_semaine"));



