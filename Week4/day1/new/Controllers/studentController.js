const StudentModel = require("../Models/studentModel.js");
const validation = require("../Controllers/validator");

let createStudent = async (req, res) => {
  try {
    let data = req.body;
    if (!validation.isValidBody(data)) {
      return res.status(400).send({ status: false, msg: "No data provided" });
    }
    let { Name, USN, Gender, Email, Mobile, Password } = data;

    // Name Validation
    if (!validation.isValid(Name)) {
      return res.status(400).send({ status: false, msg: "Please Enter your Name" });
    }
    if(!validation.isValidName.test(Name)){
      return res.status(400).send({
       msg:"Invalid name"
      })
    }

    // USN validation
    if (!validation.isValid(USN)) {
      return res.status(400).send({ status: false, msg: "Please Enter your USN" });
    }
    let dupUSN = await StudentModel.findOne({ USN: USN }); // Corrected this line
    if (dupUSN) {
      return res.status(400).send({ msg: "USN Already exists" });
    }
    // Gender
    if (!validation.isValid(Gender)) {
      return res.status(400).send({ status: false, msg: "Please Enter your Gender" });
    }
    // Mobile
    if (!validation.isValid(Mobile)) {
      return res.status(400).send({ status: false, msg: "Please Enter your Mobile number" });
    }
    let dupMobile = await StudentModel.findOne({ Mobile: Mobile }); // Corrected this line
    if (dupMobile) {
      return res.status(400).send({ msg: "Mobile Already exists" });
    }
    if(!validation.isValidMobile.test(Mobile)){
      return res.status(400).send({
       msg:"Invalid Mobile number"
      })
    }
    // Email
    if (!validation.isValid(Email)) {
      return res.status(400).send({ status: false, msg: "Please Enter your Email" });
    }
    let dupEmail = await StudentModel.findOne({ Email: Email }); // Corrected this line
    if (dupEmail) {
      return res.status(400).send({ msg: "Email Already exists" });
    }
    if(!validation.isValidEmail.test(Email)){
      return res.status(400).send({
       msg:"Invalid email"
      })
    }
    // Password
    if (!validation.isValid(Password)) {
      return res.status(400).send({ status: false, msg: "Please Enter your Password" });
    }

    let registerStudent = await StudentModel.create(data);
    return res.status(201).send({
      status: true,
      msg: "Student Data Registered successfully",
      data: registerStudent,
    });
  } catch (error) {
    return res.status(500).send({ status: false, msg: "Internal Server Error" });
  }
};

module.exports = { createStudent };
