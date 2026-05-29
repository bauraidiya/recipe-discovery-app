import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main-container">
      <h1>Recipe Descovery App</h1>
      <button>Search</button>
    </div>
    </>
  )
}

export default App
