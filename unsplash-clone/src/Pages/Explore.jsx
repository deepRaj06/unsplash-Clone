import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  Spacer,
  HSpacing,
  Text,
  HStack,
  VStack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Explore = () => {
  const firImg = {
    blurImg:
      "url(https://images.unsplash.com/photo-1536599018102-9f803c140fc1?dpr=1&auto=format&fit=crop&w=440&h=220&q=60) center/cover no-repeat",
  };

  const secImg = {
    blurImg:
      "url(https://images.unsplash.com/photo-1448387473223-5c37445527e7?dpr=1&auto=format&fit=crop&w=440&h=220&q=60) center/cover no-repeat",
  };

  const thirdImg = {
    blurImg:
      "url(https://images.unsplash.com/photo-1502759683299-cdcd6974244f?dpr=1&auto=format&fit=crop&w=440&h=220&q=60) center/cover no-repeat",
  };
  const bgImg = {
    filter: "blur(0.1px)",
    WebkitFilter: "blur(0.1px)",
    height: "200px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "6px",
    cursor: "pointer",
    _hover: { transition: "#767676 .1s ease-in-out,opacity .1s ease-in-out" },
  };

  const bgTxt = {
    color: "white",
    fontWeight: "400",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",
    width: " 100%",
    height: "200px",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0, 0.4)",
    paddingTop: "86px",
    fontSize: "20px",
    borderRadius: "6px",
    cursor: "pointer",
    _hover: {
      transition: "#0006 .2s",
    },
  };
  
  // const hoverGreyToBlack = {
  //   _hover: {
  //     cursor: 'pointer',
  //     color: 'black'
  //   },
  // }

  function images() {}

  function wallpapers() {}
  return (
    <>
      <Navbar />
      <Box mt="4rem" w="86%" ml="auto" mr="auto">
        <Text mb="0.8rem" align="start">
          Explore
        </Text>
        <Text fontWeight="600" fontSize="5xl" mb="0.8rem" align="start">
          Explore Unsplash photos
        </Text>
        <Text fontSize="18px" align="start">
          Unsplash has over a million free high-resolution photos. Explore these
          popular
        </Text>
        <Text fontSize="18px" align="start">
          photo categories on Unsplash. All photos here are free to download and
          use
        </Text>
        <Flex>
          <Text fontSize="18px" align="start">
            under the
          </Text>
          <Text color="grey" fontSize="18px" ml="6px" as="u">
            Unsplash License.
          </Text>
        </Flex>
      </Box>

      <Box
        
        mt="4rem"
        w="86%"
        ml="auto"
        mr="auto"
        mb="1rem"
      >
        <Text
          pl="12px"
          mt="1rem"
          mb="1rem"
          textAlign="start"
          fontWeight="700"
          fontSize="3xl"
        >
          Browse thousands of free images on Unsplash
        </Text>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          pl="12px"
          pr="12px"
          boxSizing="border-box"
        >
          <GridItem borderRadius="6px" w="100%" h="300">
            <Box style={bgImg} background={firImg.blurImg}>
              <Text style={bgTxt}>Backgrounds</Text>
            </Box>
            <Text mt="10px" textAlign="start">
              Download free desktop and mobile backgrounds.
            </Text>
            <Flex>
              <Box mr="10px" mt="1rem">
                <Highlight
                  query="Cool Backgrounds"
                  styles={{
                    borderRadius: "2px",
                    px: "1",
                    py: "1",
                    bg: "gray.100",
                    color: "gray",
                    _hover: { color: "black", cursor: "pointer" },
                  }}
                >
                  Cool Backgrounds
                </Highlight>
              </Box>

              <Box mt="1rem">
                <Highlight
                  query="Desktop Backgrounds"
                  styles={{
                    borderRadius: "2px",
                    px: "1",
                    py: "1",
                    bg: "gray.100",
                    color: "gray",
                    _hover: { color: "black", cursor: "pointer" },
                  }}
                  marginLeft
                >
                  Desktop Backgrounds
                </Highlight>
              </Box>
            </Flex>
          </GridItem>

          <GridItem borderRadius="6px" w="100%" h="200">
            <Box style={bgImg} background={secImg.blurImg}>
              <Text style={bgTxt}>Images</Text>
            </Box>
            <Text mt="10px" textAlign="start">
              Download amazing photos and pictures for free.
            </Text>
            <Flex>
              <Box mr="10px" mt="1rem">
                <Highlight
                  query="Free Stock Photos"
                  styles={{
                    borderRadius: "2px",
                    px: "1",
                    py: "1",
                    bg: "gray.100",
                    color: "gray",
                    _hover: { color: "black", cursor: "pointer" },
                  }}
                >
                  Free Stock Photos
                </Highlight>
              </Box>

              <Box mt="1rem">
                <Highlight
                  query="Nature Images"
                  styles={{
                    borderRadius: "2px",
                    px: "1",
                    py: "1",
                    bg: "gray.100",
                    color: "gray",
                    _hover: { color: "black", cursor: "pointer" },
                  }}
                  marginLeft
                >
                  Nature Images
                </Highlight>
              </Box>
            </Flex>
          </GridItem>

          <GridItem borderRadius="6px" w="100%" h="200">
            <Box style={bgImg} background={thirdImg.blurImg}>
              <Text style={bgTxt}>Wallpapers</Text>
            </Box>
            <Text mt="10px" textAlign="start">
              Discover your next desktop or mobile wallpaper.
            </Text>
            <Flex>
              <Box mr="10px" mt="1rem">
                <Highlight
                  query=" iPhone Wallpapers"
                  styles={{
                    borderRadius: "2px",
                    px: "1",
                    py: "1",
                    bg: "gray.100",
                    color: "gray",
                    _hover: { color: "black", cursor: "pointer" },
                  }}
                >
                  iPhone Wallpapers
                </Highlight>
              </Box>

              <Box mt="1rem">
                <Highlight
                  query="Cool Wallpapers"
                  styles={{
                    borderRadius: "2px",
                    px: "1",
                    py: "1",
                    bg: "gray.100",
                    color: "gray",
                    _hover: { color: "black", cursor: "pointer" },
                  }}
                  marginLeft
                >
                  Cool Wallpapers
                </Highlight>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      <Box
        border="1px solid black"
        mt="4rem"
        w="86%"
        ml="auto"
        mr="auto"
        mb="1rem"
        h="100vh"
      >
        <Text
          pl="12px"
          mt="1rem"
          mb="1rem"
          textAlign="start"
          fontWeight="700"
          fontSize="3xl"
        >
          Free high-resolution Unsplash photos
        </Text>
      </Box>

      <Box
       
        mt="4rem"
        w="86%"
        ml="auto"
        mr="auto"
        mb="1rem"
        h="400px"
      >
        <Flex alignItems="flex-start">
          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <Text fontWeight="600" mb="0.6rem">
                Unsplash
              </Text>
              <Text>
                Beautiful, free images gifted by the world’s most generous
              </Text>
              <Text marginTop="2px">
                community of photographers. Better than any royalty free or
              </Text>
              <Text mt="2px" mb="1rem">
                stock photos.
              </Text>
              <VStack spacing="8px" alignItems="flex-start">
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">About</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Blog</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Community</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Join the team</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Developers/API</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Press</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Help Center</Text>
              </VStack>
            </Flex>
          </Box>

          <Spacer></Spacer>

          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <VStack spacing="8px" alignItems="flex-start">
                <Text fontWeight="600">Product</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Explore</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Unsplash Awards</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Unsplash for Education</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Unsplash for iOS</Text>
                <Text  _hover={{cursor: 'pointer', color: 'black'}} color="gray">Apps & Plugins</Text>
              </VStack>
            </Flex>
          </Box>

          <Spacer></Spacer>

          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <VStack spacing="8px" alignItems="flex-start">
                <Text fontWeight="600">Popular</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Backgrounds</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Free Images</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Free Stock Photos</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Happy Birthday Images</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Cool Photos</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Nature Pictures</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Black Backgrounds</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">White Backgrounds</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Textures</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Desktop Backgrounds</Text>
              </VStack>
            </Flex>
          </Box>

          <Spacer></Spacer>

          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <VStack spacing="8px" alignItems="flex-start">
                <Text fontWeight="600">Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">HD Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">4k Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">iPhone Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Cool Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Cute Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Live Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">PC Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Black Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">iPad Wallpapers</Text>
                <Text _hover={{cursor: 'pointer', color: 'black'}} color="gray">Desktop Wallpapers</Text>
              </VStack>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Divider
        opacity="4"
        h="4px"
        colorScheme="gray"
        variant="solid"
        ml="auto"
        mr="auto"
        w="86%"
        orientation="horizontal"
      ></Divider>

      <Box
        mt="4rem"
        w="86%"
        ml="auto"
        mr="auto"
        mb="1rem"
        h="100px"
      >
        <Flex >
          <HStack spacing='20px' p='10px'>
            <Text _hover={{cursor: 'pointer', color: 'black'}} color='gray'>Privacy Policy</Text>
            <Text _hover={{cursor: 'pointer', color: 'black'}} color='gray'>Terms</Text>
            <Text _hover={{cursor: 'pointer', color: 'black'}} color='gray'>Security</Text>
          </HStack>

          <Spacer></Spacer>

          <HStack spacing='20px' p='10px'>
            <Icon _hover={{cursor: 'pointer', color: 'black'}} color='gray' w={6} h={6} as={BsTwitter} />
            <Icon _hover={{cursor: 'pointer', color: 'black'}} color='gray' w={6} h={6} as={BsFacebook} />
            <Icon _hover={{cursor: 'pointer', color: 'black'}} color='gray' w={6} h={6} as={BsInstagram} />
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Explore;
