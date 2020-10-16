//import default node js package
const path = require("path");

//import npm package
const express = require("express");
const bodyParser = require("body-parser");

//import controller
const errorController = require("./controllers/error");

const app = express();

//set template engine template engine
//ini komentar
app.set("view engine", "ejs");
app.set("views", "views");

//import route
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
//static dir
app.use(express.static(path.join(__dirname, "public")));

//route
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
