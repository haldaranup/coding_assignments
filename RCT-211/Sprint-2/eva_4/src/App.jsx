
import './App.css'
import Company from './routes/Company'
import Employee from './routes/Employee'
import Home from './routes/Home'
import {Routes, Route, BrowserRouter} from "react-router-dom"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="/company" element={<Company />}>

        </Route>
        <Route path="/employee" element={<Employee />}>

        </Route>
        <Route path="/employee/:id" element={<Home />}>

        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
