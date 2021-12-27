import React from "react";
import { Gradient, Box, Grid } from "../../atoms";
import { Navbar } from "../Navbar/Navbar";

const  frontpage = {
   title: "OUR MISSION",
   body: "We are here to scale your ideas with our latest tech knowledge.",
   body2: "Our visions and mission is to scale the ideas of the company and the customers to fruition through the constant pursuit of excellence and providing 100% Customer satisfaction",
   buttontext: "CONTACT US",
   body3: "BRANDS THAT SCALED WITH US"
};

export const Jamsfy = () => {
   return (
      <>

         <Box zIndex="1"><Navbar></Navbar></Box>
         <Box backgroundImage="url(/Img1.png)" backgroundSize="cover">
            <Box pt="149px" lineHeight="1.8rem" position="relative" marginRight="auto" marginLeft="auto" fontSize="1.1rem" width="fit-content"><Gradient>{ frontpage.title}</Gradient></Box>

            <Box lineHeight="5rem" fontSize="4rem" position="relative" marginTop="1.2rem" marginLeft="auto" marginRight="auto" textAlign="center" maxWidth="62.5rem" fontFace="AxiformaRegular" color="#ffffff" >{ frontpage.body}</Box>

            <Box position="relative" fontSize="1.2rem" maxWidth="48.50rem" marginLeft="auto" marginRight="auto" color="#ffffff" fontFace="AxiformaLight" textAlign="center" pt="63px">{ frontpage.body2}</Box>

            <Box background="linear-gradient(to right, rgb(233, 56, 112) 0%, rgb(102, 41, 163) 80%)" textAlign="center" fontSize="2rem" position="relative" maxWidth="17rem" margin="auto" color="#ffffff" whiteSpace="nowrap" lineHeight="3.5rem" cursor="pointer" marginTop="65px" borderRadius="4px" transition="all 0.7s ease-in-out 0s" outline="none" fontFace="AxiformaBold" border="1px solid rgb(102, 41, 163)">{ frontpage.buttontext}</Box>

            <Box fontWeight="600" marginTop="60px" position="relative" marginLeft="auto" marginRight="auto" width="fit-content" fontSize="1rem">
               <Gradient>{ frontpage.body3}</Gradient>
            </Box>
            <Grid bg="transparent" gridTemplateColumns="1fr 1fr 1fr 1fr" marginLeft="auto" marginRight="auto" width="fit-content" marginTop="75px" >
               <Box height="76px" width="130px"><img width="50%" height="50%" src="Elatior.png"></img></Box>
               <Box height="76px" width="130px"><img width="50%" height="50%" src="Elatior.png"></img></Box>
               <Box height="75px" width="130px"><img width="50%" height="50%" src="Elatior.png"></img></Box>
               <Box height="76px" width="130px"><img width="50%" height="50%" src="Elatior.png"></img></Box>
               <Box height="76px" width="130px"><img width="50%" height="50%" src="Elatior.png"></img></Box>
               <Box height="76px" width="130px"><img width="50%" height="50%" src="Elatior.png"></img></Box>
               <Box height="76px" width="130px"><img width="50%" height="50%" src="Elatior.png"></img></Box>
               <Box height="76px" width="130px"><img width="50%" height="50%" src="Elatior.png"></img></Box>
            </Grid>

         </Box>
      </>
   );
}