import { Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Attendance from "./pages/Attendance"
import Fees from "./pages/Fees"
import Timetable from "./pages/Timetable"
import Profile from "./pages/Profile"
import Results from "./pages/Results"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Admin from "./pages/Admin"
import Students from "./pages/Students"
import Placement from "./pages/Placement"
import NewDashboard from "./pages/NewDashboard"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/attendance" element={<Attendance />} />

      <Route path="/fees" element={<Fees />} />

      <Route path="/timetable" element={<Timetable />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/results" element={<Results />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/students" element={<Students />} />
      <Route path="/placement" element={<Placement />} />
      <Route
  path="/new-dashboard"
  element={<NewDashboard />}
/>

    </Routes>
  )
}

export default App