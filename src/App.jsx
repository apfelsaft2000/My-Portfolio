/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// eslint-disable-next-line prettier/prettier
import viteLogo from './assets/vite.svg'
import './App.css'
import { Header } from 'react-native-elements/dist/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Header></Header>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
