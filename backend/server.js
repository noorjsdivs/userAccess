const express = require("express");
var cors = require("cors");
const app = express();
// Model exports ===============================
let User = require("./model/userData.js");
app.use(express.json());

app.use(cors());
// ============== mongodb start =================
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://noor:noor2022@cluster0.1od0wfl.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Database is connected");
  }
);
// User Registration Data ======================
app.post("/registration", async (req, res) => {
  // console.log(req.body.name);
  // console.log(req.body.email);
  // console.log(req.body.password);
  const newUser = await new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save();
  console.log(newUser);
  res.send("New users created !");
});
// ============== mongodb end ===================
app.get("/", (req, res) => {
  res.send("It is time to go");
});

app.listen(8000, () => {
  console.log("Server is running on port:8000");
});
