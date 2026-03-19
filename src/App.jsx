import { useState } from "react"
import Navbar from "./components/Navbar"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div style={{
      background: darkMode ? "#111" : "#fff",
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h1>English Learning Hub</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>

      <Navbar />
    </div>
  )
}

export default App