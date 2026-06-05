import { useState, useEffect } from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"

function Students() {

  const [students, setStudents] = useState([])
  const [search, setSearch] = useState("")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("")

  const [editingId, setEditingId] = useState(null)

  const fetchStudents = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5001/api/students/all"
      )

      setStudents(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchStudents()

  }, [])

  const addStudent = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5001/api/students/add",
        {
          name,
          email,
          department,
        }
      )

      alert(res.data.message)

      setName("")
      setEmail("")
      setDepartment("")

      fetchStudents()

    } catch (error) {

      alert("Error Adding Student")

    }

  }

  const updateStudent = async () => {

    try {

      const res = await axios.put(
        `http://localhost:5001/api/students/update/${editingId}`,
        {
          name,
          email,
          department,
        }
      )

      alert(res.data.message)

      setEditingId(null)

      setName("")
      setEmail("")
      setDepartment("")

      fetchStudents()

    } catch (error) {

      alert("Update Failed")

    }

  }

  const deleteStudent = async (id) => {

    try {

      const res = await axios.delete(
        `http://localhost:5001/api/students/delete/${id}`
      )

      alert(res.data.message)

      fetchStudents()

    } catch (error) {

      alert("Delete Failed")

    }

  }

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Student Management
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <h2 className="text-xl font-bold mb-4">

            {editingId
              ? "Update Student"
              : "Add Student"}

          </h2>

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 w-full mb-3 rounded"
          />

          <input
            type="email"
            placeholder="Student Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 w-full mb-3 rounded"
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border p-3 w-full mb-3 rounded"
          />

          <button
            onClick={
              editingId
                ? updateStudent
                : addStudent
            }
            className="bg-blue-500 text-white px-5 py-2 rounded"
          >
            {editingId
              ? "Update Student"
              : "Add Student"}
          </button>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Student List
          </h2>

          <input
            type="text"
            placeholder="Search Student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 w-full mb-4 rounded"
          />

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Department</th>
                <th className="p-3">Edit</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>

            <tbody>

              {students
                .filter((student) =>
                  student.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((student) => (

                  <tr
                    key={student._id}
                    className="border-b"
                  >

                    <td className="p-3">
                      {student.name}
                    </td>

                    <td className="p-3">
                      {student.email}
                    </td>

                    <td className="p-3">
                      {student.department}
                    </td>

                    <td className="p-3">

                      <button
                        onClick={() => {

                          setEditingId(student._id)

                          setName(student.name)
                          setEmail(student.email)
                          setDepartment(student.department)

                        }}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                    </td>

                    <td className="p-3">

                      <button
                        onClick={() =>
                          deleteStudent(student._id)
                        }
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Students