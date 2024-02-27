require("dotenv").config();
const app = require("express")();

const PORT = process.env.PORT_NUMBER || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
