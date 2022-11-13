import React, { useState, useEffect } from "react"
import axios from "axios"

import styles from "./Tasks.module.scss"

import { MdDeleteOutline, MdOutlineEdit, MdOutlineSave } from "react-icons/md"

function Tasks({ tasks, setTasks }) {
  const token = localStorage.getItem("token")

  const [isEdit, setIsEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(tasks.map((item) => item.title))

  console.log(tasks.map((item) => item.title))

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
    console.log(id)
    try {
      setTasks(
        tasks.map((item) =>
          item.ID === id ? { ...item, title: item.title } : item
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

  const editTask = (item) => {
    setIsEdit(!isEdit)
    editHandler(item.ID, editTitle)
  }

  return (
    <div className={`${styles.todoContainer} d-flex align-center flex-column`}>
      {tasks ? (
        tasks.map((item) => {
          return (
            <div
              className={`${styles.task} d-flex justify-between align-center`}
              key={item.ID}
            >
              <div>{item.title}</div>
              <div className="d-flex justify-between align-center">
                <button
                  className="icon deleted"
                  onClick={(e) => {
                    e.preventDefault()
                    deleteHandler(item)
                  }}
                >
                  <MdDeleteOutline />
                </button>
                {isEdit ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  <button
                    className="icon edited"
                    onClick={() => editTask(item.ID)}
                  >
                    <MdOutlineEdit />
                  </button>
                )}
              </div>
            </div>
          )
        })
      ) : (
        <div className="d-flex justify-center">
          <h3>Нет добавленных задач, вы прекрасны</h3>
        </div>
      )}
    </div>
  )
}

export default Tasks
