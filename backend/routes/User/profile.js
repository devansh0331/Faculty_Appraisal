const jwt = require("jsonwebtoken");
const profile = (req, res) => {
  try {
    const { token } = req.cookies;
    // console.log(token);
    jwt.verify(token, process.env.SECRET, {}, (err, info) => {
      if (err) throw err;
      res.json(info);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = profile;
