const Faculty = require("../../models/Faculty");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  const secret = process.env.SECRET;

  const FacultyDoc = await Faculty.findOne({ email });
  const passOk = bcrypt.compareSync(password, FacultyDoc.password);
  if (passOk) {
    jwt.sign(
      {
        email,
        id: FacultyDoc._id,
        password: FacultyDoc.password,
        name: FacultyDoc.fname,
      },
      secret,
      {},
      (error, token) => {
        if (error) throw error;
        res
          .cookie("token", token)
          .json({
            email,
            name: FacultyDoc.fname,
          })
          .status(200);
      }
    );
    // res.status(200).json(passOk);
  } else {
    res.status(400).json("Wrong Credentials!!");
  }
};

module.exports = login;
