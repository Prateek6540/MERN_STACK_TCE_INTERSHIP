// For Student Registration
const express = require("express");
const router = express.Router();
const StudentController = require("../Controllers/studentController");

router.post("/register", StudentController.createStudent);

module.exports = router;

// For Course Registration (commented out)
// const express = require("express");
// const router = express.Router();
// const CourseController = require("../Controllers/courseController");

// router.post("/Courseregister", CourseController.createCourse);

// module.exports = router;
