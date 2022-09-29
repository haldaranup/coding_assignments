import { Tbody, Tr, Td, Button } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  deleteTeslaFailure,
  deleteTeslaRequest,
  deleteTeslaSuccess,
  getTesla,
} from "../State/App/action";

const ListTable = ({ items }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
      };
  }

  const handleDelete = (id) => {
    dispatch(deleteTeslaRequest());
    axios
      .delete(`https://haldaranup.herokuapp.com/teslaIndia/${id}`)
      .then((r) => {
        alert("Deleted Successfully!!")
        dispatch(getTesla())
        dispatch(deleteTeslaSuccess())
    })
      .catch((e) => dispatch(deleteTeslaFailure(e)));
  };
  return (
    <>
      <Tbody>
        <Tr>
          <Td>{items.name}</Td>
          <Td>{items.age}</Td>
          <Td>{items.state}</Td>
          <Td>{items.yearOfPlanning}</Td>
          <Td>
            <Button colorScheme="yellow" onClick={() => handleEdit(items.id)}>Edit</Button>
          </Td>
          <Td>
            <Button colorScheme="red" onClick={() => handleDelete(items.id)}>
              Delete
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};

export default ListTable;
