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
  Link,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import Footer from "../Components/Footer";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { DownloadIcon } from "@chakra-ui/icons";

const Explore = () => {
  const { imgs, searchedImg } = useContext(AuthContext);
  const [images, setImages] = useState([]);

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

  const API = "MCBGgZpaIiuWqzkVd7s2LPheovdkvFKFdTmRNd47b1M";

  useEffect(() => {
    axios({
      url: `https://api.unsplash.com/search/photos/?query=nature&per_page=100&client_id=${API};`,
      method: "GET",
    }).then((res) => {
      console.log(res.data.results);
      setImages(res.data.results);
    });
  }, []);

  function wallpapers() {}
  return (
    <>
      <Navbar />
      <Box mt="4rem" w="86%" ml="auto" mr="auto" pl="4px">
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

      <Box mt="4rem" w="86%" ml="auto" mr="auto" mb="1rem">
        <Text
          pl="4px"
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
          pl="4px"
          pr="4px"
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
        // border="1px solid black"
        mt="4rem"
        w="86%"
        ml="auto"
        mr="auto"
        mb="1rem"
        // h="100vh"
      >
        <Text
          pl="4px"
          mt="1rem"
          mb="1rem"
          textAlign="start"
          fontWeight="700"
          fontSize="3xl"
        >
          Free high-resolution Unsplash photos
        </Text>
        <Box mt="4rem" w="100%" ml="auto" mr="auto" pl="4px">
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={8}
            m="auto"
            boxSizing="border-box"
          >
            {images !== "" && searchedImg === false
              ? images.map((imgs) => (
                  <GridItem
                    boxSizing="border-box"
                    position="relative"
                    rowSpan={1}
                  >
                    <Image
                      w="400px"
                      h="400px"
                      borderRadius="6px"
                      src={imgs.urls.regular}
                      cursor="zoom-in"
                    />

                    <Box
                      position="absolute"
                      bottom="0"
                      background="rgba(0, 0, 0, 0.2)"
                      width="97%"
                      h="400px"
                      transition=".5s ease"
                      opacity="0"
                      color="white"
                      _hover={{
                        opacity: 1,
                      }}
                    >
                      <Flex p="10px" mt="22rem">
                        <Text alignContent="flex-end">{imgs.user.name}</Text>
                        <Spacer></Spacer>
                        <Link
                          href={imgs.links.download + `&force=true`}
                          download
                        >
                          <Icon
                            color="whiteAlpha.800"
                            alignContent="flex-end"
                            w={8}
                            h={8}
                            as={DownloadIcon}
                            _hover={{
                              color: "white",
                              cursor: "pointer",
                            }}
                          ></Icon>
                        </Link>
                      </Flex>
                    </Box>
                  </GridItem>
                ))
              : imgs.map((img) => (
                  <GridItem rowSpan={1}>
                    <Image
                      w="400px"
                      h="400px"
                      borderRadius="6px"
                      src={img.urls.regular}
                    />
                  </GridItem>
                ))}
          </Grid>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Explore;
