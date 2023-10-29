const express=require("express")
const router=express.Router()

const StudentController=require("../controllers/studentController")

router.post("/register",StudentController.createStudent);

const CourseController=require("../Controllers/courseController")
router.post("/course",StudentController.createStudent);


module.exports=router;
