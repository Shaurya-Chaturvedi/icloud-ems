import Sidebar from "../components/Sidebar"

function Timetable() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Class Timetable
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="p-3">Day</th>
                <th className="p-3">Subject</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">Monday</td>
                <td className="p-3">Java</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Tuesday</td>
                <td className="p-3">DBMS</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Wednesday</td>
                <td className="p-3">Operating Systems</td>
              </tr>

              <tr>
                <td className="p-3">Thursday</td>
                <td className="p-3">Computer Networks</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Timetable