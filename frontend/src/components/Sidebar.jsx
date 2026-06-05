import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-600 text-white p-5">

      <h1 className="text-2xl font-bold mb-8">
        I Cloud EMS
      </h1>

      <div className="flex flex-col gap-4">

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/attendance">Attendance</Link>
        <Link to="/results">Results</Link>

        <Link to="/fees">Fees</Link>

        <Link to="/timetable">Timetable</Link>
        <Link to="/admin">Admin</Link>

        <Link to="/profile">Profile</Link>
        <Link to="/students">Students</Link>
        <Link to="/placement">Placement Score</Link>

        <button
  onClick={() => {

    localStorage.removeItem("user")

    window.location.href = "/"

  }}
>
  Logout
</button>

      </div>

    </div>
  )
}

export default Sidebar