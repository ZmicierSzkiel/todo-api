import { Route, Routes } from "react-router-dom"

import Home from "../Home"
import Registration from "../Registration"
import Login from "../Login"
import PrivateRoute from "../../hoc/PrivateRoute"
import Todo from "../Todo"

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default Navigation
