import React from "react"
import axios from "axios"
import Functionality from "../Functionality"

function Tasks({ tasks, setTasks }) {
  const token = localStorage.getItem("token")

  //functions

  const deleteHandler = async (item) => {
    try {
      setTasks((tasks) => tasks.filter((prev) => prev.ID !== item.ID))
      await axios.delete(
        `https://first-node-js-app-r.herokuapp.com/api/todos/${item.ID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    } catch (error) {
      console.error(error)
      alert("Не удалось удалить задачу")
    }
  }

  const editHandler = async (id) => {
    try {
      setTasks(
        tasks.map(
          (item) => (item.ID === id ? { ...item, title: item.title } : item)
          // console.log(id)
        )
      )

      // await axios.patch(
      //   `https://first-node-js-app-r.herokuapp.com/api/todos/${item.ID}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // )
    } catch (error) {
      console.error(error)
      alert("Не удалось изменить задачу")
    }
  }

  return (
    <Functionality
      deleteHandler={deleteHandler}
      tasks={tasks}
      editHandler={editHandler}
    />
  )
}

export default Tasks
