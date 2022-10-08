import { Tbody, Tr, Td, Button } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DetailsList = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTeslaRequest());
    // 0.students[0].test
    axios
      .delete(`https://haldaranup.herokuapp.com/tuitionRecords/${id}`)
      .then((r) => {
        alert("Deleted Successfully!!");
        dispatch(getTesla());
        dispatch(deleteTeslaSuccess());
      })
      .catch((e) => dispatch(deleteTeslaFailure(e)));
  };
  const handleEdit = (id) => {};

  return (
    <>
      {items.map((i) => {
        return (
          <Tbody>
            <Tr>
              <Td>{i.name}</Td>
              <Td>{i.subject}</Td>
              <Td>{i.marks}</Td>
              <Td>{i.date}</Td>
              <Td>
                <Button
                  colorScheme="yellow"
                  onClick={() => handleEdit(i.id)}
                >
                  Edit
                </Button>
              </Td>
              <Td>
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete(i.id)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          </Tbody>
        );
      })}
    </>
  );
};

export default DetailsList;
