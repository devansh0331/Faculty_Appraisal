const mongoose = require("mongoose");

const workloadSchema = new mongoose.Schema({
  faculty_id: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  sec_sem: {
    type: String,
    require: true,
  },

  subject: {
    type: String,
    require: true,
  },

  scheduled_classes: {
    type: String,
    require: true,
  },

  held_classes: {
    type: String,
    require: true,
  },

  points: {
    type: String,
    require: true,
  },
});

const Workload = mongoose.model("Workload", workloadSchema);

module.exports = Workload;
