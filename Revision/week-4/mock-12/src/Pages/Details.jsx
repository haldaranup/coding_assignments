import React from "react";
import DetailsList from "../Components/DetailsList";
import Navbar from "../Components/Navbar";
import { Table, TableContainer, Thead, Tr, Th } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Details = () => {
  const details = useSelector((state) => state.app.details);
  //   console.log(
  //     "details:",
  //     details.map((i) => {
  //       return i.test;
  //     })
  //   );
  return (
    <div>
      <Navbar />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Subject</Th>
              <Th>Marks</Th>
              <Th>Date</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          {details
            .map((i) => {
              return i.test;
            })
            .map((i) => {
              console.log('i:', i)
              return <DetailsList items={i} key={i.id} />;
            })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Details;
