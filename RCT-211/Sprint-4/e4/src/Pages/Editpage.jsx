import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateCountryFailure,
  updateCountryRequest,
  updateCountrySuccess,
} from "../Redux/action";

export const Editpage = () => {
  const countries = useSelector((state) => state.countries);
  const [cap, setCap] = useState("");
  const [pop, setPop] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateCountry = () => {
    const payload = { city: cap, population: pop };
    console.log(payload);
    dispatch(updateCountryRequest());
    axios
      .patch(`/countries/${id}`, payload)
      .then((r) => {
        dispatch(updateCountrySuccess(countries));
        navigate("/");
        console.log(countries);
      })
      .catch((e) => dispatch(updateCountryFailure(e)));
  };

  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input
          data-cy="capital-city"
          value={cap}
          onChange={(e) => setCap(e.target.value)}
        />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input
          data-cy="population"
          value={pop}
          onChange={(e) => setPop(e.target.value)}
        />
      </Box>
      <Button data-cy="update-button" onClick={updateCountry}>
        Update
      </Button>
    </Box>
  );
};

export default Editpage;
