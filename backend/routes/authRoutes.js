const express = require("express")
const User = require("../models/User")

const router = express.Router()

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists",
      })
    }

    const user = new User({
      name,
      email,
      password,
    })

    await user.save()

    res.json({
      success: true,
      message: "User Registered Successfully",
    })

  } catch (error) {
    console.log("REGISTER ERROR:")
    console.log(error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// LOGIN
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body

    console.log("Email received:", email)

    const user = await User.findOne({ email })

    console.log("User found:", user)

    if (!user) {
      return res.json({
        success: false,
        message: "User Not Found",
      })
    }

    if (user.password !== password) {
      return res.json({
        success: false,
        message: "Wrong Password",
      })
    }

    res.json({
      success: true,
      message: "Login Successful",
      user,
    })

  } catch (error) {

    console.log("LOGIN ERROR:")
    console.log(error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
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
module.exports = router