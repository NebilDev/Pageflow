import { Routes, Route } from "react-router"
import Discover from "./pages/Discover"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Discover />} />
    </Routes>
    </>
  )
}

export default App
