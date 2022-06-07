// import React, { useContext, useState } from 'react'
// import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
// import { AuthContext } from '../Context/AuthContext'
// import axios from 'axios'

// export const Signup = () => {
//  const navigate=useNavigate()
//  let [searchParams,setSearchParams]=useSearchParams()
//   //  const [isAuth,setAuth] =useContext(AuthContext);
   
//   const [state,dispatch] =useContext(AuthContext);
  
//     const loginUser= async()=>{
//      axios({
//        url:"https://reqres.in/api/login",
//        method:"POST",
//        data:{
//          email: "eve.holt@reqres.in",
//          password:"cityslicka"
//        }
//      }).then(res=>{
//        alert("success");
//        dispatch({
//          type:"LOGIN_SUCCESS",
//          payload:res.data.token
//        })
//        const redirect=searchParams.get("redirectTo");
//        if(redirect){
//          navigate(redirect)
//        }
//        else{

//          navigate("/users")
//        }
//      }).catch(err=>{
//        alert("failure")
//      })
//     }
//     if(state.isAuth){
//         return <Navigate to="/"></Navigate>
//     }
//   return (
//     <>

//         <h2>signup</h2>
//         <button onClick={loginUser}>signup</button>
//     </>
//   )
// }

import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios';
export const Signup = () => {



    const {isAuth,toggleAuth} =useContext(AuthContext);

    const loginUser= async()=>{
             axios({
               url:"https://reqres.in/api/login",
               method:"POST",
               data:{
                 email: "eve.holt@reqres.in",
                 password:"cityslicka"
               }
             }).then(res=>{
               alert("success");
               toggleAuth()
              
             }).catch(err=>{
               alert("failure")
             })
            }
            // if(state.isAuth){
            //     return <Navigate to="/"></Navigate>
            // }

const handlesignout=()=>{
    toggleAuth()
}

  return (
    <div>
       
       <div  style={{margin:"auto",width:"3%"}}>
          <h2>signup</h2>
        
        {isAuth ?(
           <button onClick={handlesignout} >Signout</button>
        ):(
            <button onClick={loginUser}>Signup</button>
            
            )} 

       </div>

    </div>
  )
}
