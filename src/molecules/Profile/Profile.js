import React from "react";
import { Box, Card, Heading, Title } from "../../atoms";


export const Profile = ({ name, designation }) => {
  return (
    <Box p="0px 14px" align="center">
      <Heading  name={name}  />
      

      <Title designation={designation}/>
    </Box>
  );
};
export default Profile;
