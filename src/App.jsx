import { Route, Routes } from "react-router-dom"
import StartPage from "./pages/StartPage"
import GamePage from "./pages/GamePage"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  )
}

export default App
