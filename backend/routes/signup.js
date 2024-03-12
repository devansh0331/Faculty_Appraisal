const Faculty = require("../models/Faculty");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const salt1 = bcrypt.genSaltSync(10);

const secret = "hkdjhajklnajksdnanasmdasd";

const signup = async (req, res) => {
  try {
    const {
      name,
      department,
      designation,
      qualification,
      specialization,
      joiningDate,
      phnNumber,
      email,
      facultyID,
    } = req.body;
    const isPrevUser = await Faculty.findOne({ email });

    if (isPrevUser) {
      res.status(401).json("Username already exists !");
    } else {
      const newUser = await Faculty.create({
        fname: name,
        department,
        designation,
        highest_qualification: qualification,
        area_of_specialization: specialization,
        joining_date: joiningDate,
        phone_number: phnNumber,
        email,
        faculty_id: facultyID,
        password: bcrypt.hashSync(facultyID, salt1),
        createdAt: Date.now(),
      });
      if (newUser) {
        res
          .status(200)
          .json({ data: newUser, message: "User created sucesfully !" });
      } else {
        res.status(400).json("Failed to create new user !");
      }
    }
  } catch (err) {
    res.status(500).json("Server Error !");
  }
};

module.exports = signup;
