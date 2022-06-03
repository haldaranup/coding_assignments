import { useContext, useState } from "react";

import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios"

export const User = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  
  const [regUser,setUser] =useState("")

const getData =(res)=>{
  setUser(res.data.token)
}

if(isAuth){  
   const payload={
        email:"eve.holt@reqres.in",
        password: "cityslicka",
       
     };
       axios.post("https://reqres.in/api/login",payload).then((res)=>{ getData(res)
     })
}


  return (
    <div>
      <h2>login user</h2>
          
        {isAuth? (
            <> <h4> Login successful</h4>
           
            <h4>Token:{regUser}</h4>
            </>
        ):(
            <h4>Login failed</h4>
        )}
    </div>
  );
};
