import Sidebar from "../components/Sidebar"

function Placement() {

  const dsa = 80
  const projects = 85
  const aptitude = 78
  const resume = 90

  const score = Math.round(
    (dsa + projects + aptitude + resume) / 4
  )

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Placement Readiness Score
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">

          <p className="mb-3">
            DSA Score: {dsa}
          </p>

          <p className="mb-3">
            Projects Score: {projects}
          </p>

          <p className="mb-3">
            Aptitude Score: {aptitude}
          </p>

          <p className="mb-3">
            Resume Score: {resume}
          </p>

          <hr className="my-4" />

          <h2 className="text-2xl font-bold text-green-600">
            Placement Readiness: {score}%
          </h2>

        </div>

      </div>

    </div>
  )
}

export default Placement