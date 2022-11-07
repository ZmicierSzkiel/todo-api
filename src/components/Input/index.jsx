import { useState } from "react"
import axios from "axios"

function Input({ tasks, setTasks }) {
  const [title, setTitle] = useState("")

  const addTodo = async () => {
    try {
      const token = localStorage.getItem("token")
      await axios
        .post(
          "https://first-node-js-app-r.herokuapp.com/api/todos",
          {
            title: title,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => setTasks([...tasks], res.data))
    } catch (error) {
      console.error(error)
      alert("Не добавляется задачка чёт :(")
    }
    setTitle("")
  }

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTodo()
    }
  }

  return (
    <form
      className="d-flex align-center justify-between"
      style={{ width: "100%", margin: "20px" }}
    >
      <input
        type="text"
        placeholder="Пиши задачку..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={enterHandler}
        style={{ width: "60%" }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          addTodo()
        }}
        style={{ width: "30%" }}
        onChange={(e) => setTitle(e.target.value)}
        disabled={!title.length}
      >
        Добавить задачу
      </button>
    </form>
  )
}

export default Input
