import { Tbody, Tr, Td, Button } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailsSuccess } from "../Redux/App/action";



const StudentsList = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDetails = (id) => {
    dispatch(detailsSuccess(id))
    navigate("/details")
  };

  return (
    <>
      <Tbody>
        <Tr>
          <Td>{items.name}</Td>
          <Td>{items.gender}</Td>
          <Td>{items.age}</Td>
          <Td>
            <Button colorScheme="green" onClick={() => handleDetails(items.id)}>
              Details
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};

export default StudentsList;
