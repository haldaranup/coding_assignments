import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {company} from "../../db.json"

const Company = () => {
    const [name, setName] = useState({title: ''})
    const [list, setList] = useState([])
    
    
    useEffect(()=>{
        getCompany()
    },[])

    const getCompany = () =>{
        axios.get("http://localhost:8080/company")
        .then((name)=>{
            setList(name.data)
            console.log(name.data)
        }).catch((e) => {
            console.log(e.message)
        })
    }

    const handleClick = () =>{
        axios.post("http://localhost:8080/company", name)
        .then(()=>{
            setName()
            getCompany()
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const handleChange = (e)=>{
        
       setName({...name, title: e.target.value})
    }
  return (
    <div>
        {list.map(i=>{
            return <div key={i.id}>
                <h1>{i.title}</h1>
            </div>
        })}
        

        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={name.title}/>
            <button onClick={handleClick}>Add Company</button>
        </form>
    </div>
  )
}

export default Company