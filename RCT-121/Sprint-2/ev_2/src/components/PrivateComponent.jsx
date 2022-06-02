import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext"

export const PrivateComponent=({ children }) => {
    const { isAuth } = useContext(AuthContext);
   
    
    if (!isAuth) {
    return <Navigate to="/registerpageone" replace={false}/>;
    }
    return children;
    
}