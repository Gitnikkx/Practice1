import React from "react";
import { Gradient, Box, Flex, Heading, Title, Grid, Card } from "../../atoms";

const aboutTimeline = {
    title:"TIMELINE",
    title2:"What we have accomplished",
    body:"Every website in itself is a projection of technology",
    body2:"We believe in technology and its ever-changing nature. Our tech stack expands through a wide variety of technologies that cater to the diverse requirements of our clients",

};
const openings = {
    body:"We are always on the lookout for talents that resonate with our values",
    buttontext:"View Job openings",


};

export const Timeline = () => {
    return (
        <>
            <Box bg="#eef3ff">
                <Box fontWeight="700" pt="3rem" pl="6rem"> <Gradient>{aboutTimeline.title}</Gradient></Box>

                <Grid gridGap="3rem" pb="4rem" ml="6rem" mr="6rem" mt="2rem" gridTemplateColumns="1fr 1fr">
                    <Box fontWeight="700" color="#454545" position="relative" mr="auto" fontSize="3rem">{aboutTimeline.title2}</Box>
                    <Box color="#454545" fontWeight="550" lineHeight="2rem" mt="1rem" ml="-5rem" mr="auto" fontSize="1.1rem">{aboutTimeline.body}<Box pt="2rem">{aboutTimeline.body2}</Box></Box>
                </Grid>

                <Box height="32rem" width="100%" backgroundImage="url(/tl.png)"></Box>

                <Box pb="5rem" height="22rem" width="100%" backgroundImage="url(/tl2.png)" backgroundRepeat="no-repeat" position="relative" backgroundSize="cover">
                    <Box lineHeight="4rem" fontWeight="700" fontSize="3.2rem" maxWidth="57.8rem" mr="auto" ml="auto" color="white" textAlign="center" pt="5rem">{openings.body}</Box>
                    <Box borderRadius="4px" position="relative" p="0.5rem 1.5rem" lineHeight="4rem" alignItems="center" backgroundImage="linear-gradient(to right, rgb(233, 56, 112) 0%, rgb(102, 41, 163) 80%)" border="1px solid rgb(102, 41, 163)" mt="5rem" mr="auto" ml="auto" width="fit-content" fontSize="2rem" color="white">{openings.buttontext}</Box>
                </Box>









            </Box>



        </>
    );
}
