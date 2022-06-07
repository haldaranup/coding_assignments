

import { Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Cart } from './components/Cart'
import { ContactUs } from './components/Contact'
import { Coupon } from './components/Coupon'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Home} from './components/Home'
import { Login } from './components/Login'
import { Mens} from './components/Mens'
import { Navbar } from './components/Navbar'
import { Womens } from './components/Womens'

function App() {

  return (
    <div>
      <Coupon/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
        <Route path="/about-us" element={<About/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/mens" element={<Mens/>}></Route>
        <Route path="/womens" element={<Womens/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App