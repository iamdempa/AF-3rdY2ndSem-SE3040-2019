const mongoose= require('mongoose');
const Schema = mongoose.Schema;

let InstructorDB = new Schema({
    firstName: String,
    lastName: String,
    designation: String,
    faculty: String,   
    contactNumber: Number,
    email: String,
    password: String,
    isEnabaled: Boolean,
    courses: [{courseID: String}]
});

module.exports = mongoose.model('InstructorDB', InstructorDB, 'InstructorDB');