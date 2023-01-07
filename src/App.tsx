import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Avatar from './Avatar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello Vite + React!</h1>
      <Avatar url="https://avatars.githubusercontent.com/u/13873668?v=4" alt="Vinod"/>
    </div>
  )
}

export default App
