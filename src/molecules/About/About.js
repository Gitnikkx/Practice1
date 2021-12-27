import React from "react";
import { Box, Grid, Gradient } from "../../atoms";



const aboutpage = {
    title: "OUR MISSION",
    body: "What is Jamsfy?",
    body2: "We are a top-notch and premium web development company which is disrupting the usual norms of the web development industry with Headless Architectute and Web 3.0",
    grid: [
        { id: "1", title: "2020", text: "Our journey started amidst the struggling environment of the COVID-19 pandemic" },
        { id: "2", title: "25+", text: "Brands that have trusted Jamsfy to scale their ideas." },
        { id: "3", title: "30+", text: "years of combined experience in building trail-blazingly fast, SEO-optimized websites and mobile-friendly PWAs with advanced security" },
        { id: "4", title: "20+", text: "Team members of Diligient and Talented minds." }
    ],
    title2: "OUR VALUES",
    body3: "What we believe in",
    grid2: [
        { id: "0", text: "Accountability towards our deliverables." },
        { id: "1", text: "Diversity in culture and ideas" },
        { id: "2", text: "Veracity in our work and promises" },
    ],
};

const aboutTeam = {
    title: "OUR TEAM",
    title2: "Meet our Jamsfy team",
    body: "Our visions and mission is to scale the ideas of the company and the customers to fruition through the constant pursuit of excellence and providing 100% Customer satisfaction",
    grid: [
        { id: "0", name: "Shubham Saurabh", role: "Founder & CEO" },
        { id: "1", name: "Mayank Joshi", role: "Co-Founder & CTO" },
        { id: "2", name: "Dipanshu Bisht", role: "Co-Founder & COO" },
        { id: "3", name: "Lokesh Manchanda", role: "Co-Founder & CIO" },
    ]
};

export const About = () => {
    return (
        <>  <Box pt="5rem" bg="#fefefe">
            <Box fontWeight="600" fontSize="1.2rem" width="fit-content" position="relative" marginLeft="100px" marginRight="auto" minWidth="8em"><Gradient>{aboutpage.title}</Gradient></Box>

            <Grid bg="transparent" gridTemplateColumns="1fr 1fr" m="100px" marginTop="75px">
                <Box fontWeight="700" lineHeight="5rem" pr="15rem" mt="-2rem" ml="-1px" fontSize="3.5rem" color="#454545">{aboutpage.body}</Box>
                <Box fontWeight="470" ml="-5.7rem" mr="-1.25em" fontSize="1.1rem" color="#454545">{aboutpage.body2}</Box>
            </Grid>

            <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridGap="4.5rem" pl="100px">
                {aboutpage.grid.map((item) => (
                    <Box key={item.id} fontWeight="900" fontSize="4rem" color="#454545">{item.title}<Box lineHeight="1.7rem" pt="3rem" fontWeight="20" maxWidth="15rem" fontSize="1.6rem" color="#5d5757"> {item.text}</Box></Box>
                ))}
            </Grid>


            <Box mt="5rem" position="relative" borderRadius="15px" backgroundImage="url(/boxbg.png)" backgroundSize="cover" height="27rem" ml="100px" mr="100px">
                <Grid gridGap="2rem" gridTemplateColumns="1fr 1fr 1fr 1fr" pl="3rem" pr="3rem" pt="6rem">
                    <Box fontWeight="600"><Gradient>{aboutpage.title2}</Gradient><Box mt="3rem" color="white" lineHeight="4rem" fontSize="3rem">{aboutpage.body3}</Box></Box>
                    {aboutpage.grid2.map((items) => (
                    <Box key={items.id} borderRadius="0.4rem" border="2px dashed rgb(30, 117, 249)" color="white" lineHeight="2.2rem" fontSize="1.5rem" pl="1rem" pr="2rem" pt="3rem">{items.text}</Box>
                    ))}
                </Grid>
            </Box>

            <Box lineHeight="2.8rem" fontWeight="600" fontSize="1.4rem" width="fit-content" mr="auto" ml="auto" mt="5rem"><Gradient>{aboutTeam.title}</Gradient></Box>
            <Box color="#454545" fontWeight="500" position="relative" ml="auto" mr="auto" textAlign="center" lineHeight="6.5rem" fontSize="3.5rem" maxWidth="57.1rem" mt="0.5rem">{aboutTeam.title2}</Box>
            <Box mt="1rem" fontSize="1.2rem" ml="13rem" mr="13rem" textAlign="center">{aboutTeam.body}</Box>

            <Grid pb="4rem" gridGap="3rem" placeItems="center" bg="#ffffff" mt="4rem" mr="6rem" ml="6rem" gridTemplateColumns="1fr 1fr 1fr 1fr">
                {aboutTeam.grid.map((item) => (
                <Box key={item.id} textAlign="center" fontWeight="600" border="1.11236px solid #ffffff" borderRadius="0.4rem" boxShadow="rgb(0 0 0 / 5%) 0px 4.44944px 55.618px" pt="10rem" position="relative" lineHeight="2.9rem" fontSize="1.5rem" width="16rem" height="11rem" bg="white"> {item.name}<Box position="relative" fontSize="1.2rem" color="#989898" mt="-1rem"> {item.role}</Box></Box>
            ))}
                <Box textAlign="center" fontWeight="600" border="1.11236px solid #ffffff" borderRadius="0.4rem" boxShadow="rgb(0 0 0 / 5%) 0px 4.44944px 55.618px" pt="10rem" position="relative" lineHeight="2.9rem" fontSize="1.5rem" width="16rem" height="11rem" bg="white">Join the team</Box>
            </Grid>


        </Box>




        </>
    );
};