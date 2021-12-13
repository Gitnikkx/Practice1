import React from "react";
import styled from "styled-components";

const Text = styled.h2`
  font-size: 30px;
  text-align: center;
  text-decoration:underline;
`;
export const Heading = ({ name }) => {
  return <Text>{name}</Text>;
};
