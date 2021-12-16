import React from "react";
import styled from "styled-components";

const Text = styled.h2`
  font-size: 55px;
  margin-top:0px;
  margin-bottom:0px; 
  color: rgb(69, 69, 69);
  
`;
export const Heading = ({ name}) => {
  return <Text >{name}</Text>;
};
