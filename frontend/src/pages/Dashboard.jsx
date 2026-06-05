import Sidebar from "../components/Sidebar"

function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h2 className="text-3xl font-bold mb-6">
          Welcome, Shaurya 👋
        </h2>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">
              Attendance
            </h3>

            <p className="text-3xl mt-2 text-green-600">
              85%
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">
              CGPA
            </h3>

            <p className="text-3xl mt-2 text-blue-600">
              8.5
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">
              Fees
            </h3>

            <p className="text-3xl mt-2 text-green-600">
              Paid
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">
              Placement Score
            </h3>

            <p className="text-3xl mt-2 text-purple-600">
              83%
            </p>
          </div>

        </div>

        {/* Recent Activities */}

        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Recent Activities
          </h2>

          <ul className="space-y-3">

            <li>
              ✅ Attendance updated
            </li>

            <li>
              💰 Fee payment successful
            </li>

            <li>
              📚 Timetable updated
            </li>

            <li>
              🎓 Placement score generated
            </li>

          </ul>

        </div>

        {/* Quick Links */}

        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Quick Links
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="p-4 bg-blue-100 rounded-lg text-center">
              📚 Timetable
            </div>

            <div className="p-4 bg-green-100 rounded-lg text-center">
              🎓 Results
            </div>

            <div className="p-4 bg-yellow-100 rounded-lg text-center">
              💰 Fees
            </div>

            <div className="p-4 bg-purple-100 rounded-lg text-center">
              📢 Notices
            </div>

          </div>

        </div>

        {/* Footer */}

        <p className="text-center text-gray-500 mt-10">
          I Cloud EMS © 2026
        </p>

      </div>

    </div>
  )
}

export default Dashboard