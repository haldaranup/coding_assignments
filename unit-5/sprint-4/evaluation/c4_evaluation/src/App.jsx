import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
   const loginStatus = useSelector((store) => store.isLoggedin);
   console.log(loginStatus);

   return (
      <div className="App">
         <div className="navbar">
            <Link className="nav-home" to="/">
               Home
            </Link>
            {/* Show either login or logout below */}

            {loginStatus ? (
               <Link className="nav-logout" to="/logout">
                  Logout
               </Link>
            ) : (
               <Link className="nav-login" to="/login">
                  Login
               </Link>
            )}
         </div>

         <Routes>
            {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route
               path="/neworder"
               element={
                  <ProtectedRoute>
                     <NewOrder />
                  </ProtectedRoute>
               }
            ></Route>
            <Route
               path="/orders"
               element={
                  <ProtectedRoute>
                     <Orders />
                  </ProtectedRoute>
               }
            ></Route>
         </Routes>
      </div>
   );
}

export default App;
