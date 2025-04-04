const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://admin:12345@cluster0.eghvz.mongodb.net/user_app",
);

const User = mongoose.model('Users', {name: String, email: String, password: String})



app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const user = new User({
    name: name,
    email: username, 
    password: password
  });

  const existUser = await User.findOne({email: username});
  if(existUser) {
    return res.status(400).json({
      msg: "username already exists."
    })
  }
  user.save();
  return res.json({
    msg: "user created successfully"
  });
})


app.listen(3000);