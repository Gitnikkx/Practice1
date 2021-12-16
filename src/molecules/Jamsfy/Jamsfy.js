import React from "react";
import { Box, Flex, Heading, Title, Grid, Card } from "../../atoms";
import Img from "../../assets/img.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
export const Jamsfy = () => {
   return (
      <>
         <Grid p="25px 50px" gridTemplateColumns='1fr 1.4fr' gridGap={40}>
            <Box pt="30px">
               <Title>AWARDS & RECOGNITION</Title>
               <Flex alignItems="stretch"><Heading name="This is how we have been recognised in the industry."></Heading></Flex>
            </Box>

            <Grid pt="70px" gridTemplateColumns='auto' gridGap={40}>
               <Grid gridGap={40} gridTemplateColumns="auto auto"><Card>
                  <Box borderRadius="15px" pb="7px" pl="7px" pt="7px" pr="7px" height="20vh" width="49vh" bg="#fff">
                     <img width="260px" height="130px" src={Img3} />
                  </Box>
                  <Box zIndex={1} top={40} height="3rem" width="3rem" background="linear-gradient(93.74deg, rgb(30, 117, 249) 0%, rgb(102, 41, 163) 103.04%)"
                     position="absolute" right="-1.5rem" borderRadius="2rem">
                  </Box>
               </Card>
                  <Box fontSize="30px" fontWeight="bold" width="fit-content" color="#454545">Start-Up India
                     <Box fontWeight="lighter" fontSize="20px" width="fit-content" color="#454545">We have been recognized by Start-Up India initiative by the Government of India.</Box></Box>
               </Grid>

               <Grid gridGap={40} gridTemplateColumns="auto auto">  <Card>
                  <Box borderRadius="15px" pb="7px" pl="7px" pt="7px" pr="7px" height="20vh" width="49vh" bg="#fff">
                     <img width="242px" height="109px" src={Img2} />
                  </Box>

                  <Box zIndex={1} top={40} height="3rem" width="3rem" background="linear-gradient(93.74deg, rgb(30, 117, 249) 0%, rgb(102, 41, 163) 103.04%)"
                     position="absolute" right="-1.5rem" borderRadius="2rem">
                  </Box> </Card><Box fontSize="30px" fontWeight="bold" width="fit-content" color="#454545">Storyblok Case Study
                     <Box fontWeight="lighter" fontSize="20px" width="fit-content" color="#454545">We got featured on Storyblok for one of their Case Study</Box> </Box> </Grid>
               <Grid gridGap={40} gridTemplateColumns="auto auto">     <Card>
                  <Box borderRadius="15px" pb="7px" pl="7px" pt="7px" pr="7px" height="20vh" width="49vh" bg="#fff">
                     <img width="252px" height="129px" src={Img} />
                  </Box>
                  <Box zIndex={1} top={40} height="3rem" width="3rem" background="linear-gradient(93.74deg, rgb(30, 117, 249) 0%, rgb(102, 41, 163) 103.04%)"
                     position="absolute" right="-1.5rem" borderRadius="2rem">
                  </Box>     </Card><Box fontSize="30px" fontWeight="bold" width="fit-content" color="#454545">Tech Spark Tech 50
                     <Box fontWeight="lighter" fontSize="20px" width="fit-content" color="#454545">We are proud to have been mentioned by Tech Spark in their Tech50</Box>
                  </Box>

               </Grid>
            </Grid>

         </Grid>
      </>
   );
};