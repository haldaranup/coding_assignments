import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
const Employee = () => {
  const [name, setName] = useState({ title: "" });
  const [list, setList] = useState([]);

  
  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = () => {
    axios
      .get("http://localhost:8080/employee")
      .then((name) => {
        setList(name.data);
        console.log(name.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const handleClick = () =>{
    axios.post("http://localhost:8080/employee", name)
    .then(()=>{
        setName()
        getCompany()
    })
}

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setName({ ...name, name: e.target.value });
  };
  return (
    <div>
      {list.map((i) => {
        return (
          <div key={i.id}>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Employee Name</Th>
                    <Th>Company Name</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{i.id}</Td>
                    <Td>{i.name}</Td>
                    <Td>{i.title}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        );
      })}

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name.title} />
        <button onClick={handleClick}>Add Employee</button>
      </form>
    </div>
  );
};
export default Employee;
