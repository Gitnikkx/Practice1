import React from "react";
import { Box, Flex, Heading, Title , Grid ,Card } from "../../atoms";
import Img from "../../assets/img.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
export const Jamsfy= () => {
    return (
       <>
    <Grid> 
          <Grid pl="40px" pt="10px" gridTemplateRows="auto">
             <Title>AWARDS & RECOGNITION</Title>       
          </Grid>

        <Grid pl="94vh" gridTemplateColumns='auto' gridGap={40}>
         <Card>
             <Box borderRadius="15px" pb="7px" pl="7px" pt="7px" pr="7px" height="20vh" width="50vh" bg="#fff"> 
                <img width="260px" height="130px"src={Img3}/>
             </Box>
         </Card>

         <Card>
             <Box borderRadius="15px" pb="7px" pl="7px" pt="7px" pr="7px" height="20vh" width="50vh" bg="#fff"> 
                <img width="242px" height="109px"src={Img2}/>
             </Box>
         </Card>
         <Card>
             <Box borderRadius="15px" pb="7px" pl="7px" pt="7px" pr="7px" height="20vh" width="50vh" bg="#fff"> 
                <img width="252px" height="129px"src={Img}/>
             </Box>
         </Card>
        </Grid>
</Grid>
</>
);
};