import React, { useState } from "react"

import styles from "./Functionality.module.scss"
import { MdDeleteOutline, MdOutlineEdit, MdOutlineSave } from "react-icons/md"

function Functionality({ editHandler, deleteHandler, tasks }) {
  const [isEdit, setIsEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(tasks.map((item) => item.title))

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
                    onClick={() => editTask(item)}
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

export default Functionality
