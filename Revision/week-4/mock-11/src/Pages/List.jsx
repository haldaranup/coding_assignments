import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListTable from "../Components/ListTable";
import { getTesla } from "../State/App/action";
import {
  Table,
  TableCaption,
  TableContainer,
  Thead,
  Tr,
  Th,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const List = () => {
  const tesla = useSelector((state) => state.app.tesla);
  console.log("tesla:", tesla);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTesla());
  }, []);
  return (
    <div>
      <Navbar />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>State</Th>
              <Th>Year of Planning</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          {tesla?.map((i) => {
            return <ListTable items={i} key={i.id} />;
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
