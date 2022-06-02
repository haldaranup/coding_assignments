import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Restaurent } from './components/restaurent'


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className="App">
      <Restaurent></Restaurent>
      
    </div>
  )
}

export default App
