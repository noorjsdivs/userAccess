const express = require("express");
var cors = require("cors");
const app = express();

// ============== mongodb start =================
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://noor:noor2022@cluster0.1od0wfl.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Database is connected");
  }
);
// ============== mongodb end ===================
app.use(cors());
app.get("/", (req, res) => {
  res.send("It is time to go");
});

app.listen(8000, () => {
  console.log("Server is running on port:8000");
});
