import { useState } from 'react'
import debinha from './assets/debinha00.png'
import Skills from './Skills'
import SocialMedia from './SocialMedia'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={debinha} className="picture" alt="React logo" />
        </a>
      </div>
      <h1>Deborah Nascimento</h1>
      <SocialMedia />
      <Skills />
    </div>
  )
}

export default App
