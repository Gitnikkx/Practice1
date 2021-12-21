import React from "react";
import { Gradient, Box, Flex, Heading, Title, Grid, Card } from "../../atoms";


export const Navbar = () => {
    return (
    
        <Box width="100%" pt="1rem" pl="2rem" pr="2rem" height="4.5rem" position="fixed" backgroundImage="linear-gradient(294.61deg, rgb(69, 16, 138) 2.27%, rgb(61, 6, 95) 29.57%, rgb(16, 5, 77) 101.35%)" >
       
         <Grid gridTemplateColumns="1fr 1.55fr">
            <Box pl="65px"><img src="logo.png" width="30%" height="80%"></img></Box>

            <Grid pr="3rem" gridGap={20} alignItems="center" gridTemplateColumns="auto auto auto auto auto auto auto" textAlign="center" alignItems="center">
               <Box><Title>Jamstack</Title></Box>
               <Box><Title>Headless eCommerce</Title></Box>
               <Box><Title>Pricing</Title></Box>
               <Box><Title>About</Title></Box>
               <Box><Title>Contact US</Title></Box>
               <Box height="20px" width="20px" bg="#fd3266"  ml="2rem"> </Box>
            </Grid>
         </Grid>
      </Box>


    );
}   