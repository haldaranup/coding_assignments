import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ breakpoints })


const GridElements = () => {
  return (
    <Grid h='80vh' templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}>
      <GridItem colSpan={1} bg="blue.500" />
      <GridItem colSpan={2} bg="orange.500" />
      <GridItem colSpan={1} bg="red.500" />
    </Grid>
  );
};

export default GridElements;
