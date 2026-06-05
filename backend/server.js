const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")
const studentRoutes = require("./routes/studentRoutes")

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/students", studentRoutes)

// Test Route
app.get("/", (req, res) => {
  res.send("EMS Backend Running")
})

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected")
  })
  .catch((err) => {
    console.log(err)
  })

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})