import {
    Box,
    Button,
    Flex,
    Image,
    Spacer,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import SearchBar from "../SearchBar";
  
  const Home_ExperimentalTab = () => {
    const bgImg = {
      filter: "blur(0.1px)",
      WebkitFilter: "blur(0.1px)",
      height: "606px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "0px",
      cursor: "pointer",
    };
  
    const firTxt = {
      position: "absolute",
      zIndex: "2",
      height: "606px",
      backgroundColor: "rgba(0,0,0, 0.4)",
      cursor: "pointer",
    };
  
    const editorialImg = {
      blurImg:
        "url(https://images.unsplash.com/photo-1658178688850-6f760b3b7f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop&w=1599&h=594) center/cover no-repeat",
    };
    return (
      <>
        <Box m="0" p="0" w="100%" h="606px" border="1px solid black">
          <Box style={bgImg} background={editorialImg.blurImg}>
            <Box w="100%" style={firTxt}>
              <Flex textAlign="start">
                <Box mt="8rem" mr="auto" ml="auto" w="80%" h="300px">
                  <VStack spacing="24px" alignItems="start">
                    <Text fontWeight="600" fontSize="5xl" color="white">
                    Experimental
                    </Text>
                    <VStack spacing="2px" alignItems="start">
                      <Text fontSize="20px" color="white">
                      Through the use of unlikely textures, intriguing subject matter, and new
                      </Text>
                      <Text fontSize="20px" color="white">
                      formats — photography has the power to challenge our perspectives and
                      </Text>
                      <Text fontSize="20px" color="white">
                      push creativity forward.
                      </Text>
                    </VStack>
                    <Button
                      backgroundColor="white"
                      color="black"
                      pt="24px"
                      pb="24px"
                    >
                      <Flex>
                        <Text mr="8px">Submit to</Text>
                        <Text fontWeight="bold">Experimental</Text>
                      </Flex>
                    </Button>
                  </VStack>
                </Box>
              </Flex>
  
              <Flex mt="9rem" pl="12px" pr="12px">
                <Text fontWeight="light" color="white">
                  Photo by Visax
                </Text>
                <Text ml="24rem" fontWeight="light" color="white">
                  Read more about the Unsplash License
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Home_ExperimentalTab;
  