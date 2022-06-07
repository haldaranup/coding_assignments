import styled from "styled-components";

export const GridBox = styled.div`

  margin: auto auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5%;
 
  padding: 2%;
`;

export const Card = styled.div`
  display: grid;
  height:400px;
  text-align: center;
  border: 1px solid green;
`;