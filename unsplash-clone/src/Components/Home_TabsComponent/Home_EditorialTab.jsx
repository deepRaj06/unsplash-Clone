import { Box, Flex, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../SearchBar";

const Home_EditorialTab = () => {
    
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
          "url(https://images.unsplash.com/photo-1656860444750-dd91d7fecfc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop&w=1599&h=594) center/cover no-repeat",
      };

  return (
    <>
      <Box m="0" p="0" w="100%" h="606px" border="1px solid black">
        <Box style={bgImg} background={editorialImg.blurImg}>
          <Box w="100%" style={firTxt}>
            <Flex textAlign="start">
              <Box mt="8rem" mr="auto" ml="auto" w="60%" h="300px">
                <VStack spacing="24px" alignItems="start">
                  <Text fontWeight="600" fontSize="5xl" color="white">
                    Unsplash
                  </Text>
                  <VStack spacing="2px" alignItems="start">
                    <Text fontSize="20px" color="white">
                      The internet’s source of freely-usable images.
                    </Text>
                    <Text fontSize="20px" color="white">
                      Powered by creators everywhere.
                    </Text>
                  </VStack>
                  <SearchBar />
                  <Text fontSize="18px" color="white">
                    Trending: flower, wallpapers, backgrounds, happy, love
                  </Text>
                </VStack>
              </Box>
            </Flex>
            <Flex flexDirection="row-reverse" mt="6rem" pr="12px">
              <Image
                mt="0rem"
                w={40}
                h={10}
                justifyContent="flex-end"
                src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image"
              ></Image>
            </Flex>
            <Flex pl="12px" pr="12px">
              <Text color="white">Photo by eberhard 🖐 grossgasteiger</Text>
              <Spacer></Spacer>
              <Text color="white">Read more about the Unsplash License</Text>
              <Spacer></Spacer>
              <Text color="white">Create your website today.</Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home_EditorialTab;
