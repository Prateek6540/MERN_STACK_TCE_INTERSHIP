const express = require("express");
const router = express.Router();
const StudentController = require("../Controllers/studentController");
const CourseController = require("../Controllers/courseController");

// For Student Registration
router.post("/register", StudentController.createStudent);
router.post("/login", StudentController.loginStudent);

// For Course Registration
router.post("/Courseregister", CourseController.createCourse);

// Route to get the list of courses
router.get("/courseList", CourseController.getCourses);

module.exports = router;

// For Course Registration (commented out)
// const express = require("express");
// const router = express.Router();
// const CourseController = require("../Controllers/courseController");

// router.post("/Courseregister", CourseController.createCourse);

// module.exports = router;
