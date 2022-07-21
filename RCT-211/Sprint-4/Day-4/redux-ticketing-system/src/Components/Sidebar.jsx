import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  return (
    <Box border="1px solid red" width="250px" height="100vh">
      <Stack direction="column">
        <Box border="1px solid red" height="15vh"></Box>
        <Box border="1px solid blue" height="70vh"></Box>
        <Box border="1px solid red" height="10vh">
          {isAuth && "LOGOUT"}
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
