import { createContext,useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children })=> {
    const [auth, setAuth] = useState("Login");
    
    const handleAuth = () => {
    setAuth(auth==="Login" ? "LogOut" : "Login")
    }

return <AuthContext.Provider value={{auth,handleAuth}}>{children}</AuthContext.Provider>;
};