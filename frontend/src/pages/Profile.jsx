import Sidebar from "../components/Sidebar"
import ShauryaPhoto from "../assets/Shaurya2.jpeg"

function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Student Profile
        </h1>

        <div className="bg-white p-6 rounded-xl shadow w-[500px]">

          <img
  src={ShauryaPhoto}
  alt="Shaurya Chaturvedi"
  className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
/>
<h2 className="text-2xl font-bold mt-4">
  Shaurya Chaturvedi
</h2>

<p className="text-gray-600">
  B.Tech CSE - 6th Semester
</p>

<p className="text-gray-600">
  Galgotias University
</p>

          <p>
            <strong>Name:</strong> {user?.name}
          </p>

          <p className="mt-3">
            <strong>Email:</strong> {user?.email}
          </p>

          <p className="mt-3">
            <strong>Role:</strong> {user?.role}
          </p>

          <p className="mt-3">
            <strong>Course:</strong> B.Tech CSE
          </p>

          <p className="mt-3">
            <strong>Semester:</strong> 6th
          </p>

        </div>

      </div>

    </div>
  )
}

export default Profile