import Sidebar from "../components/Sidebar"

function Results() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Semester Results
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Subject</th>
                <th className="p-3 text-left">Marks</th>
                <th className="p-3 text-left">Grade</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Java</td>
                <td className="p-3">88</td>
                <td className="p-3">A</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">DBMS</td>
                <td className="p-3">92</td>
                <td className="p-3">A+</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">OS</td>
                <td className="p-3">85</td>
                <td className="p-3">A</td>
              </tr>

              <tr>
                <td className="p-3">CN</td>
                <td className="p-3">89</td>
                <td className="p-3">A</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Results