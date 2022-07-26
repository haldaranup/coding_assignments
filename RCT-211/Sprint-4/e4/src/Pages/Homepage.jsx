import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { Link as ProLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesFailure,
  getCountriesRequest,
  getCountriesSuccess,
} from "../Redux/action";

import {
  deleteCountryFailure,
  deleteCountryRequest,
  deleteCountrySuccess,
} from "../Redux/action";

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const countries = useSelector((state) => state.countries);
  const [currentCountry, setCurrentCountry] = useState({});
  const [data, setData] = useState([]);
  console.log(countries);

  const getCountries = () => {
    dispatch(getCountriesRequest());
    axios
      .get("/countries")
      .then((r) => {
        dispatch(getCountriesSuccess(r.data));
      })
      .catch((e) => dispatch(getCountriesFailure(e)));
  };
  // console.log(data);

  const deleteCountry = (id) => {
    // dispatch(deleteCountryRequest());
    // axios
    //   .delete(`/country/${id}`)
    //   .then((r) => {
    //     dispatch(deleteCountrySuccess(r.data));
    //     console.log(r);
    //     navigate("/");
    //   })
    //   .catch((e) => dispatch(deleteCountryFailure(e)));
  };

  const sortHandle = (e) => {
    const type = e.target.value;
    if (type === "asc") {
      setData([...countries.sort((a, b) => a.population - b.population)]);
    } else if (type === "desc") {
      setData([...countries.sort((a, b) => b.population - a.population)]);
    } else return data;
    // console.log(data);
  };
  const handleEdit = () => {};

  useEffect(() => {
    getCountries();
    // let currentCountry = countries.find((i) => i.id === Number(id));
    // currentCountry && setCurrentCountry(currentCountry)
  }, []);
  // console.log(data);

  return (
    <Box minWidth={"2xl"}>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row" onChange={sortHandle}>
            <Radio data-cy="asc" value="asc">
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            {countries.map((i) => {
              return (
                <Tr key={i.id}>
                  <Td>{i.country}</Td>
                  <Td>{i.city}</Td>
                  <Td>{i.population}</Td>
                  <Td>
                    <ProLink to={`/country/${i.id}`}>
                      <Button bg={"green"} onClick={handleEdit}>
                        Edit
                      </Button>
                    </ProLink>
                  </Td>
                  <Td>
                    {/* <Button bg={"red"} onClick={deleteCountry(currentCountry.id)}>Delete</Button> */}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
