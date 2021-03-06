import React from "react";
import { Gradient, Box, Flex, Heading, Title, Grid, Card } from "../../atoms";

export const End = () => {
    return (
        <>
            <Box bg="black">
                <Box fontSize="2.2rem" fontWeight="600" color="white" position="relative" textAlign="center" pt="4rem">Catch us candid here</Box>

                <Box pl="12rem" pr="12rem" pb="3rem">
                    <Grid gridGap="1rem" cursor="pointer" borderRadius="4px" position="relative" borderRadius="2rem" justifyContent="center" pt="4rem" pb="2rem" color="white" gridTemplateColumns="1fr 1fr 1fr 1fr" textAlign="center">
                        <Box borderRadius="4px" p="15px" fontSize="1.3rem" background="#1a1a1a" maxHeight="6.4rem">LINKEDIN</Box>
                        <Box borderRadius="4px" p="15px" fontSize="1.3rem" background="#1a1a1a" maxHeight="6.4rem">INSTAGRAM</Box>
                        <Box borderRadius="4px" p="15px" fontSize="1.3rem" background="#1a1a1a" maxHeight="6.4rem">FACEBOOK</Box>
                        <Box borderRadius="4px" p="15px" fontSize="1.3rem" background="#1a1a1a" maxHeight="6.4rem">TWITTER</Box>
                        <Box borderRadius="4px" p="15px" fontSize="1.3rem" background="#1a1a1a" maxHeight="6.4rem">YOUTUBE</Box>
                    </Grid>
                </Box>

                <Grid pl="4rem" pr="4rem" pb="4rem" color="white" gridTemplateColumns=" 2fr 1fr 1fr 1fr 1fr">
                    <Box pl="3rem" height="100%" width="100%"><img src="logo.png"></img></Box>
                    <Box lineHeight="1.3rem" pr="1rem" position="relative" fontSize="1.4rem" >Services <Box pt="1.5rem" fontSize="0.85rem" >Jamstack Website Development</Box><Box pt="1rem" fontSize="0.9rem">Headless Commerce Development</Box></Box>
                    <Box lineHeight="1.3rem" pr="1rem" position="relative" fontSize="1.4rem" >Company  <Box pt="1.5rem" fontSize="0.85rem" >About Us</Box><Box pt="1rem" fontSize="0.9rem">Careers</Box> </Box>
                    <Box lineHeight="1.3rem" pr="1rem" position="relative" fontSize="1.4rem" >Get Help  <Box pt="1.5rem" fontSize="0.85rem" >Contact & Support</Box><Box pt="1rem" fontSize="0.9rem">FAQ</Box> </Box>
                    <Box lineHeight="1.3rem" pr="1rem" position="relative" fontSize="1.4rem" >Our Office <Box pt="1.5rem" fontSize="0.85rem" >+91-7208185785</Box><Box pt="1rem" fontSize="0.9rem">contact@jamsfy.com</Box> <Box pt="1rem" fontSize="0.9rem">B-205, ikeva co-working space, Supreme Business Park, Hiranandani Gardens, Powai, Mumbai, India</Box></Box>
                </Grid>

                <Box pb="2.5rem" color="white" mr="auto" width="fit-content" ml="auto">Jamsfy Technologies Pvt Ltd ?? 2021 - 2022 All Rights Reserved.</Box>

            </Box>





        </>
    );
}