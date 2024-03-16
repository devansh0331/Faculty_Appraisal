const Faculty = require("../models/Faculty");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const salt1 = await bcrypt.genSalt(10);
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

    const isPrevUser = await Faculty.findOne({ faculty_id: facultyID });

    if (isPrevUser) {
      res.status(401).json("User already exists !");
    } else {
      const password = bcrypt.hashSync(facultyID, salt1);
      var newUser = await Faculty.create({
        fname: name,
        department,
        designation,
        highest_qualification: qualification,
        area_of_specialization: specialization,
        joining_date: joiningDate,
        phone_number: phnNumber,
        email,
        faculty_id: facultyID,
        password,
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
    console.log("Error " + err);
    res.status(500).json("Server Error !");
  }
};

module.exports = signup;
