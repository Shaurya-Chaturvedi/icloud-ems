import { useState, useEffect } from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"

function Admin() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    const fetchCount = async () => {

      try {

        const res = await axios.get(
          "http://localhost:5001/api/students/count"
        )

        setCount(res.data.totalStudents)

      } catch (error) {

        console.log(error)

      }

    }

    fetchCount()

  }, [])

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl">
              Total Students
            </h2>

            <p className="text-3xl mt-3">
              {count}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl">
              Faculty
            </h2>

            <p className="text-3xl mt-3">
              35
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl">
              Courses
            </h2>

            <p className="text-3xl mt-3">
              12
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Admin