const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },

  designation: {
    type: String,
    require: true,
  },
  highest_qualification: {
    type: String,
    require: true,
  },
  area_of_specialization: {
    type: String,
    require: true,
  },
  joining_date: {
    type: String,
    require: true,
  },
  phone_number: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },
  faculty_id: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Faculty = mongoose.model("Faculty", facultySchema);
module.exports = Faculty;
