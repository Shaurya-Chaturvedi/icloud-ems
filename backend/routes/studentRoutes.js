const express = require("express")
const Student = require("../models/Student")

const router = express.Router()

// Add Student
router.post("/add", async (req, res) => {

  try {

    const student = new Student(req.body)

    await student.save()

    res.json({
      success: true,
      message: "Student Added"
    })

  } catch (error) {

    res.json({
      success: false,
      message: error.message
    })

  }

})

// Get All Students
router.get("/all", async (req, res) => {

  try {

    const students = await Student.find()

    res.json(students)

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

})
router.get("/count", async (req, res) => {

  const count = await Student.countDocuments()

  res.json({
    totalStudents: count
  })

})

// Delete Student
router.delete("/delete/:id", async (req, res) => {

  try {

    await Student.findByIdAndDelete(
      req.params.id
    )

    res.json({
      success: true,
      message: "Student Deleted"
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

})
// Update Student
router.put("/update/:id", async (req, res) => {

  try {

    await Student.findByIdAndUpdate(
      req.params.id,
      req.body
    )

    res.json({
      success: true,
      message: "Student Updated"
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

})
module.exports = router