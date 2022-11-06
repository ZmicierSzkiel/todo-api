import React from "react"
import "./App.scss"

import Header from "./components/Header"
import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <Navigation />
    </div>
  )
}

export default App
