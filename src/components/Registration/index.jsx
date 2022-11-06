import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Registration() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isMan, setIsMan] = useState(false)
  const [age, setAge] = useState("")

  const navigate = useNavigate()

  const register = async () => {
    try {
      await axios.post(
        "https://first-node-js-app-r.herokuapp.com/api/users/register",
        {
          name: name,
          email: email,
          username: username,
          password: password,
          isMan: isMan,
          age: age,
        }
      )
      navigate("/login")
    } catch (error) {
      console.error("Error request", error)
      alert("Чел, чёт не то с формой")
    }
  }

  return (
    <div className="registration">
      <form className="d-flex align-center justify-center flex-column p-40">
        <label htmlFor="name">Инесса, твоё имя</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="username">inessa.meow, твой логин</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
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
        <label htmlFor="isMan">Мужчина?</label>
        <input
          type="checkbox"
          name="isMan"
          id="isMan"
          onChange={() => setIsMan(true)}
        />
        <label htmlFor="isWoman">Жанчына?</label>
        <input
          type="checkbox"
          name="isWoman"
          id="isWoman"
          onChange={() => setIsMan(false)}
        />
        <br />
        <label htmlFor="age">Твой возраст, Инесса</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <div className="d-flex justify-around align-center">
          <button type="reset">Сбросить лишний вес</button>
          <button
            style={{ backgroundColor: "green", color: "white" }}
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              register()
            }}
          >
            Если заполнил, то делай тык
          </button>
          <Link to="/">
            <button type="button">Я передумал, хочу назад</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Registration
