const StudentModel = require("../Models/courseModel.js");

let createStudent = async (req, res) => {
  try {
    let data = req.body;
    let registerStudent = await StudentModel.create(data);
    return res.status(201).send({
      status: true,
      msg: "course data successfully",
      data: registerStudent,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "Internal Server Error" });
  }
};

module.exports = { createStudent };