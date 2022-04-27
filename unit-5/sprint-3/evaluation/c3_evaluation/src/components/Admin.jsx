import React, {useState, useEffect} from 'react';
import {Container, Row, Col,Button, Form, Navbar } from "react-bootstrap";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

// import './App.css';
const api="http://localhost:8080/users"

const initialstate=
{

image:"",
name:"",
salary:"",
tasks:"",
status:"",
title:"",
team:"",
};


 export function Admin() {
  const [state, setState]= useState(initialstate);
  const [data, setData] = useState([]);
  const {name, image, title, tasks,salary,team,status} =state;
  const [userId, setUserId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  
  const [selects, setselects]=useState();
  
  useEffect(() => {
  loadusers();
  },[])
  
  const loadusers = async () => {
    
    const response = await axios.get(`${api}`);
    setData(response.data);
  }
  
  const handleChange =(e) =>{
  let { name, value }= e.target;
  setState({ ...state, [name]: value });
  setselects({ ...state, [name]: value });
  };
 
//   const handleDelete = async (id) => {
    
//     if(window.confirm("Are you wanted to delete that user ?")) {
      
//       axios.delete(`${api}/${id}`);
//         toast.success("Deleted Successfully");
//        setTimeout(() => loadusers(), 500);
//     }
//   }

//   const handleUpdate = async (id) => {
//     const singleUser = data.find((item) => item.id===id);
//     setState({ ...singleUser });
//     setUserId(id);
//     setEditMode(true);
//     }
 
   

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!name || !salary || !image || !title || !team || !status ||!tasks) {
  toast.error("Please fill all input field");
  
    if(!editMode)
    {
      
      axios.post(`${api}`, state);
      toast.success ("Added Successfully");
      setState({ image:"",
      name: "", salary: "", status:"",title:"",tasks:"",team:"",
      });
      setTimeout(() => loadusers(), 500);
    }
    else
    {
      
      axios.put(`${api}/${userId}`, state);
      toast.success ("Updates Successfully");
      setState({ image:"",
      name: "", salary: "", status:"",title:"",tasks:"",team:"",
      })
      setTimeout( () => loadusers(), 500);
      setUserId(null);
      setEditMode(false);
      
    }
  
  }
  
  };
  
  

  return (
    <>
     <ToastContainer />
     <Navbar bg="primary" variant="dark" className="justify-content-center">
     <Navbar.Brand>
     Employee Details
     </Navbar.Brand>
     </Navbar>
     <Container style={{ marginTop: "7@px" }}>
         <Row>
         <Col md={7}>
<Form onSubmit={handleSubmit}>
<Form.Group>
<Form.Label style={{ textAlign: "left" }}></Form.Label>
<Form.Control
type="text"
placeholder="Image url"
name="image"
value={image}
onChange={handleChange}
/>
</Form.Group>
<Form.Group>
<Form.Label style={{ textAlign: "left" }}>Name</Form.Label>
<Form.Control
type="text"
placeholder="Enter the Name"
name="name"
value={name}
onChange={handleChange}
/>
</Form.Group>
<Form.Group>
<Form.Label style={{ textAlign: "left" }}>Salary</Form.Label>
<Form.Control
type="text"
placeholder="Enter the Salary"
name="salary"
value={salary}
onChange={handleChange}
/>
</Form.Group>
<Form.Group>
<Form.Label style={{ textAlign: "left" }}>Tasks</Form.Label>
<Form.Control
type="text"
placeholder="Enter the Tasks"
name="tasks"
value={tasks}
onChange={handleChange}
/>
</Form.Group>
<Form.Group>
<Form.Label style={{ textAlign: "left" }}>Status</Form.Label>
<select name="status" onChange={handleChange}> 
<option value="working">working</option>
<option value="terminated">terminated</option>

</select>


    
</Form.Group>
<Form.Group>
<Form.Label style={{ textAlign: "left" }}>Title</Form.Label>
<select name="title"   onChange={handleChange}  >
      <option value="intern">intern</option>
      <option value="Jr.Software Developer">Jr.Software Developer</option>
      <option value="Sr.Software Developer">Sr.Software Developer</option>
      <option value="Team Lead">Team Lead</option>
      
      
    </select>
</Form.Group>
<Form.Group>
<Form.Label style={{ textAlign: "left" }}>Team</Form.Label>
<select name="team" onChange={handleChange}  >
      <option value="Frontend">Frontend</option>
      <option value="Backened">Backened</option>
      <option value="QA">QA</option>
      
      
      
    </select>
</Form.Group>

 <div className="d-grid gap-2 mt-2">
<Button type="submit" variant="primary" size="lg">
{editMode ? "Update":"Submit"}

</Button>
</div>

</Form>

         </Col>
         {/* <Col md={10}>
         <Table bordered hover>
<thead>
<tr>
<th>No.</th>
<th>Name</th>
<th>Age</th>
<th>Address</th>
<th>Department</th>
<th>Salary</th>
<th>Martial Status</th>
<th>Action</th>

</tr>
</thead>
{data && data.map((item, index) => (
<tbody key={index}>
<tr>
<td>{index+1}</td>
<td>{item.name}</td>
<td>{item.age}</td>
<td>{item.address}</td>
<td>{item.department}</td>
<td>{item.salary}</td>
<td>{item.martialStatus}</td>
<td>
<ButtonGroup>
<Button 
 onClick={()=> handleUpdate(item.id)}
style={{marginRight: "5px"}} variant="secondary">
Update
</Button>
<Button style={{marginRight: "5px"}} variant="danger"
  onClick={()=> handleDelete(item.id)}

>
Delete
</Button>
</ButtonGroup>

</td>
</tr>
</tbody>
))}
</Table>

         </Col> */}
         </Row>
      </Container>

   </>

  );
}


