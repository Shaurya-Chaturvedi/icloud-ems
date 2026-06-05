import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import ShauryaPhoto from "../assets/Shaurya2.jpeg"
import { Link } from "react-router-dom"

import {
  FaClipboardCheck,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaGraduationCap
} from "react-icons/fa"

function NewDashboard() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-3xl p-6 text-white shadow-lg">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-3xl font-bold">
  Good Morning ☀️
</h1>

<p className="mt-2">
  Welcome back, Shaurya
</p>

<p className="mt-2 text-lg">
  {time.toLocaleTimeString()}
</p>

<p className="text-lg">
  {new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
</p>
<p className="text-sm opacity-90">
  B.Tech CSE | Galgotias University
</p>

            </div>

            <img
              src={ShauryaPhoto}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />

          </div>

        </div>

        <div className="mt-6">

          <input
            type="text"
            placeholder="🔍 Search modules..."
            className="w-full p-4 rounded-2xl shadow bg-white outline-none"
          />

        </div>
                <div className="grid md:grid-cols-3 gap-6 mt-6">

          <Link to="/attendance">

            <div className="bg-pink-100 p-6 rounded-3xl shadow hover:scale-105 transition">

              <FaClipboardCheck size={35} />

              <h3 className="font-bold text-xl mt-2">
                Attendance
              </h3>

              <p className="mt-3 text-3xl">
                85%
              </p>

            </div>

          </Link>

          <Link to="/timetable">

            <div className="bg-purple-100 p-6 rounded-3xl shadow hover:scale-105 transition">

              <FaCalendarAlt size={35} />

              <h3 className="font-bold text-xl mt-2">
                Timetable
              </h3>

              <p className="mt-3">
                5 Classes Today
              </p>

            </div>

          </Link>

          <Link to="/fees">

            <div className="bg-green-100 p-6 rounded-3xl shadow hover:scale-105 transition">

              <FaMoneyBillWave size={35} />

              <h3 className="font-bold text-xl mt-2">
                Fees
              </h3>

              <p className="mt-3">
                Paid ✅
              </p>

            </div>

          </Link>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-blue-100 p-6 rounded-3xl shadow">

            <h3 className="font-bold text-xl">
              Holidays
            </h3>

            <p className="mt-3">
              Independence Day
            </p>

          </div>

          <div className="bg-yellow-100 p-6 rounded-3xl shadow">

            <h3 className="font-bold text-xl">
              Notifications
            </h3>

            <p className="mt-3">
              Exam Form Released
            </p>

          </div>

        </div>
                <div className="bg-white rounded-3xl shadow mt-6 p-6">

          <h2 className="text-2xl font-bold mb-4">
            Quick Modules
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

            <Link
              to="/results"
              className="border rounded-2xl p-5 text-center hover:shadow-lg hover:scale-105 transition block"
            >
              <FaGraduationCap
                size={35}
                className="mx-auto mb-2"
              />

              <p>Results</p>
            </Link>

            <Link
              to="/timetable"
              className="border rounded-2xl p-5 text-center hover:shadow-lg hover:scale-105 transition block"
            >
              📅
              <p>Timetable</p>
            </Link>

            <Link
              to="/fees"
              className="border rounded-2xl p-5 text-center hover:shadow-lg hover:scale-105 transition block"
            >
              💰
              <p>Fees</p>
            </Link>

            <Link
              to="/notices"
              className="border rounded-2xl p-5 text-center hover:shadow-lg hover:scale-105 transition block"
            >
              📢
              <p>Notices</p>
            </Link>

            <Link
              to="/placement"
              className="border rounded-2xl p-5 text-center hover:shadow-lg hover:scale-105 transition block"
            >
              🎓
              <p>Placement</p>
            </Link>

          </div>

        </div>

        <p className="text-center text-gray-500 mt-10">
          I Cloud EMS © 2026
        </p>

      </div>

    </div>
  )
}

export default NewDashboard