
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";


export const Navbar = ()=> {
    
    const {auth} = useContext(AuthContext)

    return (
    <nav
    style={{
    display: "flex",
    justifyContent: "end",
    padding: "15px",
    fontSize: "28px",
    border: "1px solid red",
    margin: "10px",
    }}>
     {auth === "Login" ? "Logout" : "Login"}

    </nav>
    );
    };
    