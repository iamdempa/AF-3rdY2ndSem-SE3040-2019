const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Bundler = require("parcel-bundler");
const cors = require("cors");
const mongoose = require("mongoose");

const router = express.Router();

const bundler = new Bundler("./src/index.html");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bundler.middleware());
// app.use(express.static('./src'));

app.use("/courseweb", router);

mongoose.connect("mongodb://127.0.0.1:27017/courseweb", {
  useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB via 27017");
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log("Application is running on port 3000");
});

app.get("/", function(req, res) {
  res.sendFile("./dist/index.html");
});

router.route('/instructor/:username').get((req, res) => {
    
});