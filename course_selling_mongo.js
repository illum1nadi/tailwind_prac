const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:12345@cluster0.eghvz.mongodb.net/Course_Selling_App",
);

const adminSchema = new mongoose.Schema({
  username : String,
  password : String
})

const courseSchema = new mongoose.Schema({
  title : String,
  description : String,
  courseId : mongoose.Schema.Types.ObjectId,
  imageLink : String,
  price : Number
})

const userSchema = new mongoose.Schema({
  username : String,
  password : String,
  purchasedCourses : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Course'
  }]
})

const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('Users', userSchema)
const Course = mongoose.model('Course', courseSchema)

async function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  const value = await Admin.findOne({
    username : username,
    password : password
  });
  if(value) {
    next();
  }
  else {
    res.status(403).json({
      msg : "User does not exist."
    })
  }
}

app.post('/admin/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const value = await Admin.findOne({
    username : username
  });
  if(value) {
    res.status(403).json({
      msg : "Username already exists."
    })
  }
  else {
    const admin = new Admin({
      username : username,
      password : password
    });
    admin.save();
    res.status(200).json({
      msg : "Admin successfully Created."
    })
  }
})

app.listen(3000);
