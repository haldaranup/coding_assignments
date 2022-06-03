import React, { useEffect, useReducer,useState } from 'react'
import axios from 'axios'
const githubActions={
    fetch:"fetch",
    success:"success",
    failure:"failure"
}

const initState={
    loading:true,
    error:false,
    data:null
}
const githubReducer=(state,action)=>{
switch(action.type){
    case githubActions.fetch:{
        return (
            {
                ...state,
                loading:true,
                error:false,
                data:null

            }
        )
    }
    case githubActions.success:{
        return (
            {
                ...state,
                loading:false,
                error:false,
                data:action.payload
            }
            )
        }
        case githubActions.failure:{
            return (
                {
                    ...state,
                    loading:false,
                    error:true,
                    
                }
                
                )
            }
            default:
                return state
            }
        }
     export const Github = () => {
            const [text,setText]=useState("");
            const [query,setQuery]=useState("masai")
    const [{
       loading,
       error,
       data 
    },dispatch]=useReducer(githubReducer,initState)

    useEffect(()=>{
        fetchData({query})
      
    },[query])

    const fetchData= async ({query})=>{
        dispatch({
            type:githubActions.fetch
        })
       axios({
           
           url:"https://api.github.com/search/users",
           method:"GET",
           params:{
               q:query
           }
       }).then(res=>{
           dispatch({
               type:githubActions.success,
               payload:res.data
           }).catch(err=>{
               dispatch({
                   type:githubActions.failure
               })
           })
       })
    }

    const handleAdd=()=>{
        setQuery(text)
    }

 console.log(text)
  return (
    <div>

<input type="text" onChange={(e)=>setText(e.target.value)}/>
    <button onClick={handleAdd}>Search</button>
{loading && <div>Loading</div>}

{error && <div>Error</div>}

{
    data?.items.map((item)=>(
        <div key={item.id}>

            <div style={{marginRight:"50px"}}><img src={item.avatar_url}></img></div>
            <div >{item.login}</div>
        </div>

    ))
}

    </div>
  )
}
