import { createContext ,useState} from "react";


export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{

    const [state,setState]=useState("dark");

    const toggleTheme=()=>{
        state==="dark" ? setState("light") :setState("dark")
    }

return (
    <ThemeContext.Provider value={[state,toggleTheme]}>
        {children}
    </ThemeContext.Provider>
)

}