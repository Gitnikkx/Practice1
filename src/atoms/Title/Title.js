import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 20px;
  text-align: center;
`;
export const Title = ({ designation }) => {
  return <Text p="2rem">{designation}</Text>;
};
