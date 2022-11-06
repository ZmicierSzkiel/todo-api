import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const login = async () => {
    try {
      const res = await axios.post(
        "https://first-node-js-app-r.herokuapp.com/api/auth/login",
        {
          email: email,
          password: password,
        }
      )
      localStorage.setItem("token", res.data.token)
      navigate("/todo")
    } catch (error) {
      console.error(error)
      alert("Такого пользователя нет!")
    }
  }

  return (
    <form
      className="d-flex align-center justify-center flex-column p-40"
      onSubmit={(e) => login(e)}
    >
      <label htmlFor="email">Инесса, твой емэйл</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="pass">Инесса, тут поле со звездочкой</label>
      <input
        type="password"
        name="pass"
        id="pass"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <div className="d-flex justify-between align-center">
        <Link to="/">
          <button type="button">Хочу назад позязя</button>
        </Link>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            login()
          }}
        >
          Тыкаешь и получаешь тудушку
        </button>
      </div>
    </form>
  )
}

export default Login
