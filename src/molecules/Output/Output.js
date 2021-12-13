import React from "react";
import { Box, Flex, Heading, Title , Grid ,Card } from "../../atoms";
import { Profile } from "../Profile";
import Img from "../../assets/img.png";
import Img2 from "../../assets/img2.png";

export const Output = () => {
    return (
        <>
            <Grid   gridTemplateRows="auto" gridGap={80} gridTemplateColumns="1fr 1fr 1fr"  pl="80px"  bg="primary.3">

                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="AAAA" designation="CTO"></Profile>
                        </Box>
                    </Card>

                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                           <Profile name="BBB" designation="CTO"></Profile>
                        </Box>
                    </Card>

                    <Card>
                    <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        <Profile name="CCC" designation="CEO"></Profile>
                    </Box>
                    </Card>

                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="DDD" designation="CTO"></Profile>
                        </Box>
                    </Card>
                    <Card>
                    <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        
                        <Profile name="EEE" designation="CEO"></Profile>
                        </Box>
                    </Card>
                    <Card>
                    <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="FFF" designation="CTO"></Profile>
                        </Box>
                    </Card>
                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="GGG" designation="CTO"></Profile>
                            </Box>
                        </Card>
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="HHHH" designation="CEO"></Profile>
                            </Box>
                        </Card>
            </Grid>





            

            <Flex  pl ="65px" pt="40px" flexDirection="row" flexWrap="wrap"  alignItems="center" bg="primary.5">
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="III" designation="CEO"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="JJJ" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="KKK" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="LLL" designation="CEO"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="MMM" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="NNN" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" pl="150px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="OOO" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="75px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="PPP" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>

            </Flex>






        </>
    );
};