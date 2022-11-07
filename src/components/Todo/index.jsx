import React, { useState, useEffect } from "react"
import axios from "axios"

import Input from "../Input"
import Tasks from "../Tasks"

import styles from "./Todo.module.scss"

function Todo() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token")
    const fetchData = async () => {
      try {
        await axios
          .get("https://first-node-js-app-r.herokuapp.com/api/todos", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => setTasks(res.data))
      } catch (error) {
        console.error(error)
        alert("Не получается загрузить все задачки :(")
      }
    }
    fetchData()
  }, [])

  return (
    <div className={`${styles.innerContainer} d-flex flex-column align-center`}>
      <Input tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default Todo
