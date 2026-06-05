import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email,
          password,
        }
      )

      if (res.data.success) {

  localStorage.setItem(
    "user",
    JSON.stringify(res.data.user)
  )

  alert("Login Successful")

  navigate("/dashboard")

} else {

        alert(res.data.message)

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
          I Cloud EMS
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full p-3 rounded-xl"
        >
          Login
        </button>

        <p
          className="text-center mt-4 text-blue-500 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register
        </p>

      </div>

    </div>
  )
}

export default Login