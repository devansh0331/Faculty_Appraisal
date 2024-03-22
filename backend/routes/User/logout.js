const logout = (req, res) => {
  console.log("Logout");
  res.cookie("token", "").json("ok");
};

module.exports = logout;
