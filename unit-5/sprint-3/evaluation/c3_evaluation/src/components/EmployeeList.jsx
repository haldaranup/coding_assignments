import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components"
export const UsersList = () => {
    const [users, setUsers] = useState([]);

    const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  height: 200px;
  width: 170px;
  justify-content:centre;
  background-color:yellow;
  margin:15px;
  align-content:center;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

    useEffect(() => {
    axios.get("http://localhost:8080/users").then (({ data }) => {
    setUsers (data);
    });
    }, []);
    return (
    <CardWrapper>
    {users.map((user) => (
        
    <div key={user.id}>
    <img src={user.image} alt=""/>
    <br/>
    {user.name}
    
    <br/>
    {user.title}
    <br/>
    <Link to={`/users/${user.id}`} >
     Click here for more Info.
    </Link>
    </div>
    
    
    ))}
    
    </CardWrapper>
    );
    };
    