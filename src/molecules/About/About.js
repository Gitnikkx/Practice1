import React from "react";
import { Box, Flex, Heading, Title, Grid, Card, Gradient } from "../../atoms";


export const About = () => {
    return (
        <>  <Box pt="5rem" bg="#fefefe">
            <Box fontWeight="600" fontSize="1.2rem" width="fit-content" position="relative" marginLeft="100px" marginRight="auto" minWidth="8em"><Gradient>ABOUT US</Gradient></Box>

            <Grid bg="transparent" gridTemplateColumns="1fr 1fr" m="100px" marginTop="75px">
                <Box fontWeight="700" lineHeight="5rem" pr="15rem" mt="-2rem" ml="-1px" fontSize="3.5rem" color="#454545">What is Jamsfy?</Box>
                <Box fontWeight="470" ml="-5.7rem" mr="-1.25em" fontSize="1.1rem" color="#454545">We are a top-notch and premium web development company which is disrupting the usual norms of the web development industry with Headless Architectute and Web 3.0</Box>
            </Grid>

            <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridGap="4.5rem" pl="100px">
                <Box fontWeight="900" fontSize="4rem" color="#454545">2020<Box lineHeight="1.7rem" pt="3rem" fontWeight="20" maxWidth="15rem" fontSize="1.6rem" color="#5d5757"> Our journey started amidst the struggling environment of the COVID-19 pandemic</Box></Box>
                <Box fontWeight="900" fontSize="4rem" color="#454545">25+ <Box lineHeight="1.7rem" pt="3rem" fontWeight="20" maxWidth="15rem" fontSize="1.6rem" color="#5d5757">Brands that have trusted Jamsfy to scale their ideas.</Box></Box>
                <Box fontWeight="900" fontSize="4rem" color="#454545" >30+ <Box lineHeight="1.7rem" pt="3rem" fontWeight="20" maxWidth="15rem" fontSize="1.6rem" color="#5d5757">years of combined experience in building trail-blazingly fast, SEO-optimized websites and mobile-friendly PWAs with advanced security</Box></Box>
                <Box fontWeight="900" fontSize="4rem" color="#454545" >20+ <Box lineHeight="1.7rem" pt="3rem" fontWeight="20" maxWidth="15rem" fontSize="1.6rem" color="#5d5757">Team members of Diligient and Talented minds.</Box></Box>
            </Grid>

            <Box mt="5rem" position="relative" borderRadius="15px" backgroundImage="url(/boxbg.png)" backgroundSize="cover" height="27rem" ml="100px" mr="100px">
                <Grid gridGap="2rem" gridTemplateColumns="1fr 1fr 1fr 1fr" pl="3rem" pr="3rem" pt="6rem">
                    <Box fontWeight="600"><Gradient>OUR VALUES</Gradient><Box mt="3rem" color="white" lineHeight="4rem" fontSize="3rem">What we believe in</Box></Box>
                    <Box borderRadius="0.4rem" border="2px dashed rgb(30, 117, 249)" color="white" lineHeight="2.2rem" fontSize="1.5rem" pl="1rem" pr="2rem" pt="3rem">Accountability towards our deliverables.</Box>
                    <Box borderRadius="0.4rem" border="2px dashed rgb(30, 117, 249)" color="white" lineHeight="2.2rem" fontSize="1.5rem" pl="1rem" pr="2rem" pt="3rem">Diversity in culture and ideas</Box>
                    <Box borderRadius="0.4rem" border="2px dashed rgb(30, 117, 249)" color="white" lineHeight="2.2rem" fontSize="1.5rem" pl="1rem" pr="2rem" pt="3rem">Veracity in our work and promises</Box>
                </Grid>
            </Box>

            <Box lineHeight="2.8rem" fontWeight="600" fontSize="1.4rem" width="fit-content" mr="auto" ml="auto" mt="5rem"><Gradient>OUR TEAM</Gradient></Box>

            <Box color="#454545" fontWeight="500" position="relative" ml="auto" mr="auto" textAlign="center" lineHeight="6.5rem" fontSize="3.5rem" maxWidth="57.1rem" mt="0.5rem"> Meet our Jamsfy team</Box>

            <Box mt="1rem" fontSize="1.2rem" ml="13rem" mr="13rem" textAlign="center">Our visions and mission is to scale the ideas of the company and the customers to fruition through the constant pursuit of excellence and providing 100% Customer satisfaction</Box>

            <Grid pb="4rem" gridGap="3rem" placeItems="center" bg="#ffffff" mt="4rem" mr="6rem" ml="6rem" gridTemplateColumns="1fr 1fr 1fr 1fr">
                <Box textAlign="center" fontWeight="600" border="1.11236px solid #ffffff" borderRadius="0.4rem" boxShadow="rgb(0 0 0 / 5%) 0px 4.44944px 55.618px" pt="10rem" position="relative" lineHeight="2.9rem" fontSize="1.5rem" width="16rem" height="11rem" bg="white">Shubham Saurabh <Box position="relative" fontSize="1.2rem" color="#989898" mt="-1rem"> Founder & CEO</Box></Box>
                <Box textAlign="center" fontWeight="600" border="1.11236px solid #ffffff" borderRadius="0.4rem" boxShadow="rgb(0 0 0 / 5%) 0px 4.44944px 55.618px" pt="10rem" position="relative" lineHeight="2.9rem" fontSize="1.5rem" width="16rem" height="11rem" bg="white">Mayank Joshi    <Box position="relative" fontSize="1.2rem" color="#989898" mt="-1rem">Founder & CEO</Box></Box>
                <Box textAlign="center" fontWeight="600" border="1.11236px solid #ffffff" borderRadius="0.4rem" boxShadow="rgb(0 0 0 / 5%) 0px 4.44944px 55.618px" pt="10rem" position="relative" lineHeight="2.9rem" fontSize="1.5rem" width="16rem" height="11rem" bg="white">Dipanshu Bisht  <Box position="relative" fontSize="1.2rem" color="#989898" mt="-1rem">Founder & CEO</Box></Box>
                <Box textAlign="center" fontWeight="600" border="1.11236px solid #ffffff" borderRadius="0.4rem" boxShadow="rgb(0 0 0 / 5%) 0px 4.44944px 55.618px" pt="10rem" position="relative" lineHeight="2.9rem" fontSize="1.5rem" width="16rem" height="11rem" bg="white">Lokesh Manchanda <Box position="relative" fontSize="1.2rem" color="#989898" mt="-1rem">Founder & CEO</Box></Box>
                <Box textAlign="center" fontWeight="600" border="1.11236px solid #ffffff" borderRadius="0.4rem" boxShadow="rgb(0 0 0 / 5%) 0px 4.44944px 55.618px" pt="10rem" position="relative" lineHeight="2.9rem" fontSize="1.5rem" width="16rem" height="11rem" bg="white">Join the team</Box>
            </Grid>


        </Box>




        </>
    );
};