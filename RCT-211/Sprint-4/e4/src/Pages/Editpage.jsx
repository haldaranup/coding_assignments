import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCountryFailure, updateCountryRequest, updateCountrySuccess } from "../Redux/action";

export const Editpage = () => {
  const [capital, setCapital] = useState('')
  const [population, setPopulation] = useState('')

  const countries = useSelector((state) => state.countries);
  const { id } = useParams();
  const dispatch = useDispatch()
  const [currentCountry, setCurrentCountry] = useState({})
  const updateCountry = () => {
    
    dispatch(updateCountryRequest());
    axios
      .patch(`/country/${id}, {}`)
      .then((r) => {
        dispatch(updateCountrySuccess(r.data));
        console.log(r.data);
      })
      .catch((e) => dispatch(updateCountryFailure(e)));
  };

  

  useEffect(() => {
    let currentCountry = countries.find((i) => i.id === Number(id));
    console.log(currentCountry);
    currentCountry && setCurrentCountry(currentCountry);
  }, [countries, id]);


  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" value={capital} onChange={(e) => setCapital(e.target.value)} />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" value={population} onChange={(e) => setPopulation(e.target.value)} />
      </Box>
      <Button data-cy="update-button">Update</Button>
    </Box>
  );
};

export default Editpage;
