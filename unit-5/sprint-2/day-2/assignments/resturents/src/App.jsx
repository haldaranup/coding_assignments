import { useState } from 'react'
import './App.css'
import Input from './components/Input';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Input />
      <RestaurantDetails />
    </div>
  )
}

export default App
