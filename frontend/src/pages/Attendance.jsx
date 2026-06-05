import Sidebar from "../components/Sidebar"

function Attendance() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Attendance
        </h1>

        <div className="bg-white p-6 rounded-xl shadow w-96">

          <h2 className="text-xl font-bold">
            Current Attendance
          </h2>

          <p className="mt-4 text-2xl text-green-600">
            85%
          </p>

        </div>

      </div>

    </div>
  )
}

export default Attendance