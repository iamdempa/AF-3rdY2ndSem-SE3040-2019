const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const InstructorDB = require('./public/DBModels/InstructorDB');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use('/courseweb', router);

//connect to books database
mongoose.connect('mongodb://127.0.0.1:27017/courseweb', {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB via port 27017");
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
});

router.route("/courses").get((req, res) => {
  // name of the course database model here
  InstructorDB.find((err, instructors) => {
    if(err) throw err;
    res.status(200).send(instructors);
  });
});

//add a course
router.route('/course/add').post((req, res) => {
  let instructorDB = new InstructorDB(req.body);
  instructorDB.save().then(bookDB => {
    res.status(200).send(`${bookDB} Added`);
  }).catch((err) => {
    res.status(400).send({message: err});
  });
});
