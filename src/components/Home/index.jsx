import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="d-flex justify-center align-center">
      <Link to="/register">
        <button style={{ marginRight: "20px" }}>Зарегаться</button>
      </Link>
      <Link to="/login">
        <button>Залогиниться</button>
      </Link>
    </div>
  )
}

export default Home
