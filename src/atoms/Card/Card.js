import React from "react";
import { Box , Flex} from "../../atoms";


export const Card = ({ children }) => {
  return (
    <Box bg="primary.4" boxShadow="0 4px 8px 0 rgba(0,0,0,0.2) " height="20vh" width="50vh" borderRadius="15px" >
      {children}
    </Box>
  

  );
};
 export default Card;

 

