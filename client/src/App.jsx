import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
