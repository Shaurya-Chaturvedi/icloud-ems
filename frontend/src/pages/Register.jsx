import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5001/api/auth/register",
        {
          name,
          email,
          password,
        }
      )

      alert(res.data.message)

      if (res.data.success) {
        navigate("/")
      }

    } catch (error) {

      console.log(error)

      alert(
        error.response?.data?.message ||
        error.message ||
        "Server Error"
      )

    }

  }

  return (
    <div className="h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-96">

        <h1 className="text-3xl font-bold mb-5 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-green-500 text-white w-full p-3 rounded-xl"
        >
          Register
        </button>

      </div>
    </div>
  )
}

export default Register