import React from "react";
import { Box, Flex, Heading, Title , Grid ,Card } from "../../atoms";
import { Profile } from "../Profile";
import Img from "../../assets/img.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";

export const Output = () => {
    return (
        <>
            <Grid gridTemplateRows="auto" gridGap={20} gridTemplateColumns="1fr 1fr 1fr"  pl="80px"  backgroundImage="url('http://www.vangelista.net/LVA_website2/Professional_Background_files/shapeimage_2.png')">

                    <Card>
                        <Box pb="10px" bg="red">
                            <img src={Img} alt="" width = "100%" border-radius="5px"/>
                            <Box>
                            <Profile name="AAAA" designation="1"></Profile>
                            </Box>
                        </Box>
                    </Card>

                    <Card>
                        <img src={Img3} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                        <Profile name="BBB" designation="2"></Profile>
                        </Box>
                    </Card>

                    <Card>
                    <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        <Profile name="CCC" designation="3"></Profile>
                    </Box>
                    </Card>

                    <Card>
                        <img src={Img4} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="DDD" designation="4"></Profile>
                        </Box>
                    </Card>
                    <Card>
                    <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        
                        <Profile name="EEE" designation="5"></Profile>
                        </Box>
                    </Card>
                    <Card>
                    <img src={Img3} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="FFF" designation="6"></Profile>
                        </Box>
                    </Card>
                    <Card>
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="GGG" designation="7"></Profile>
                            </Box>
                        </Card>
                    <Card >
                        <img src={Img4} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="HHHH" designation="8"></Profile>
                            </Box>
                        </Card>
            </Grid>



            <Flex  pl ="70px" pt="40px" flexDirection="row" flexWrap="wrap"  alignItems="center" bg="primary.5">
                <Box width="20%" p="15px" py="20px">
                    <Card >
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                        <Profile name="III" designation="1"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="20%" p="15px" py="20px">
                    <Card >
                        <img src={Img3} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                        <Profile name="JJJ" designation="2"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="20%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                        <Profile name="KKK" designation="3"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="20%" p="15px" py="20px">
                    <Card >
                        <img src={Img3} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                        <Profile name="LLL" designation="4"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="20%" p="15px" py="20px">
                    <Card >
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                        <Profile name="MMM" designation="5"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="20%" p="15px" py="20px">
                    <Card >
                        <img src={Img3} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                        <Profile name="NNN" designation="6"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="20%" pl="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                        <Profile name="OOO" designation="7"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="20%" p="15px" py="20px">
                    <Card >
                        <img src={Img3} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                        <Profile name="PPP" designation="8"></Profile>
                        </Box>
                    </Card>
                </Box>

            </Flex>

        </>
    );
};