import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import StudentsList from "../Components/StudentsList";
import { getTuition } from "../Redux/App/action";
import { Table, TableContainer, Thead, Tr, Th } from "@chakra-ui/react";

const Home = () => {
  const [searchName, setSearchName] = useState("");

  const students = useSelector((state) => state.app.students);

  console.log("students:", students);
  const dispatch = useDispatch();

  const handleSearch = () => {
    
    
  };

  useEffect(() => {
    dispatch(getTuition());
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <input type="text" onChange={(e) => setSearchName(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Age</Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
          {students?.map((i) => {
            return <StudentsList items={i} key={i.id} />;
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
