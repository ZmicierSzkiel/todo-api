import Input from "../Input"
import Tasks from "../Tasks"

import styles from "./Todo.module.scss"

function Todo() {
  return (
    <div className={`${styles.innerContainer} d-flex flex-column align-center`}>
      <Input />
      <Tasks />
    </div>
  )
}

export default Todo
