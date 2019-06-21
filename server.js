// const express = require("express");
// const bodyParser = require("body-parser");
const Bundler = require("parcel-bundler");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const InstructorDB = require("./public/DBModels/InstructorDB");

// const app = express();
// const router = express.Router();

const bundler = new Bundler("./src/index.html");

// app.use(bodyParser.json());
// app.use(cors());
// app.use(bundler.middleware());
// app.use("/courseweb", router);

// app.get("/", function(req, res) {
//   res.sendFile("./dist/index.html");
// });

// //  connect to books database
// mongoose.connect("mongodb://127.0.0.1:27017/courseweb", {
//   useNewUrlParser: true
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB via port 27017");
// });

// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log(`Listening to port: ${PORT}`);
// });

// router.route("/courses").get((req, res) => {
//   // name of the course database model here
//   InstructorDB.count({}, function(err, count) {
//     res.status(200).send(count);
//   });
// });

// //  add a course
// router.route("/course/add").post((req, res) => {
//   let instructorDB = new InstructorDB(req.body);
//   instructorDB
//     .save()
//     .then(bookDB => {
//       res.status(200).send(`${bookDB} Added`);
//     })
//     .catch(err => {
//       res.status(400).send({ message: err });
//     });
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const InstructorDB = require("./public/DBModels/InstructorDB");
const AssignmentDB = require('./public/DBModels/AssignmentDb');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use("/courseweb", router);
app.use(bundler.middleware());

//connect to books database
mongoose.connect("mongodb://127.0.0.1:27017/courseweb", { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB via port 27017");
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});

//add a course - not my part though
router.route("/course/add").post((req, res) => {
  let instructorDB = new instructorDB(req.body);
  instructorDB
    .save()
    .then(bookDB => {
      res.status(200).send(`${bookDB} Added!`);
    })
    .catch(err => {
      res.status(400).send({ message: err });
    });
});

//get courses to-be accepted count
router.route("/courses").get((req, res) => {
  InstructorDB.countDocuments({}, function(err, count) {
    res.status(200).send(`${count}`);
  });
});

//add an assignment
router.route('/assignment/add').post((req, res) => {
  let assignmentDb = new AssignmentDB(req.body);
  assignmentDb.save().then((assignment) => {
    res.status(200).send(assignment);
  }).catch((err) => {
    res.status(400).send({message: err});
  });
});

//get all assignments
router.route('/assignments').get((req, res) => {
  AssignmentDB.find((err, assignments) => {
    if(err) throw err;
    res.status(200).send(assignments);
  });
});

//get assignment by ID
router.route('/assignments/update/:assignmentID').get((req, res) => {
  let id = req.params.assignmentID;
  AssignmentDB.findById(id, (err, assignment) => {
    if(err) throw err;
    if(!assignment) return res.status(400).send('No data found');
    res.status(200).send(assignment);
  })
});