import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import NewRecipe from "./pages/NewRecipe";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main-container">
        <Navbar />
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<NewRecipe />} />
      </Routes>
    </div>
    </>
  )
}

export default App
