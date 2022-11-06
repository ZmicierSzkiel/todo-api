import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) =>
  localStorage.getItem("token") ? children : <Navigate to={"/login"} />

export default PrivateRoute
