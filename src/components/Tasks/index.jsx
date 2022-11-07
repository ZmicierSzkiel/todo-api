import React, { useState, useEffect } from "react"
import axios from "axios"

import styles from "./Tasks.module.scss"

import { MdDeleteOutline, MdOutlineEdit, MdOutlineSave } from "react-icons/md"

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

  const editHandler = async (item) => {
    try {
      await axios.patch(
        `https://first-node-js-app-r.herokuapp.com/api/todos/${item.ID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    } catch (error) {
      console.error(error)
      alert("Не удалось изменить задачу")
    }
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
                <button
                  className="icon edited"
                  onClick={() => editHandler(item)}
                >
                  <MdOutlineEdit />
                </button>
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
