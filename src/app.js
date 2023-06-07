const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");

//creating the variables to acess the the satic files
let app = express();
let staticpath = path.join(__dirname, "../public");
let templatePath = path.join(__dirname, "../templates/views");

//establishing the databse connection
require("./database/conn");

//accessing the static files and dynamic files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(staticpath));
app.set("view engine", "ejs");
app.set("views", templatePath);

//creating the port number
const port = process.env.PORT || 8000;

//creating local variables to access the routes files
const indexRoute = require("./routes/index");
const loginRoute = require("./routes/login");
const menuRoute = require("./routes/menu");
const messageRoute = require("./routes/user_message");

//using the get and post request
app.use("/", indexRoute);
app.use("/login", loginRoute);
app.use("/menu", menuRoute);
app.post("/", messageRoute);
app.post("/api/login", loginRoute);

//listening to the port
app.listen(port, () => {
  console.log(`running at port = ${port}`);
});
