import { Box, Divider, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import Navbar_Blog from "../Components/Navbar_SearchBar_Component/Navbar_Blog";
import { Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Navbar_Blog />

      <Box mt="6rem">
        <Text fontWeight="700" fontSize="6xl">
          Unsplash Blog
        </Text>
        <Text color="gray.500" fontSize="2xl">
          Stories from the community powering the internet’s visuals
        </Text>
      </Box>

      <Box
        mt="6rem"
        w="86%"
        //  border='1px solid black'
        ml="auto"
        mr="auto"
      >
        <Text mb="2rem" textAlign="start" fontSize="5xl" fontWeight="800">
          Featured
        </Text>
        <Box>
          <Flex gap="2rem">
            <Box
              w="50%"
              h="540px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
              // border='1px solid blue'
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w1000/2022/07/A-look-back-at-June--Blog-.jpg"
                  w="100%"
                  h="360px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="4xl">
                      A look back on June
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">July 7, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box
              w="50%"
              h="540px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
              // border='1px solid blue'
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/2022/03/Blog-compress-2-1.gif"
                  w="100%"
                  h="360px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="4xl">
                      Unsplash for Good
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Unsplash Team </Text>
                      <Text ml="1rem">March 2, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        mt="6rem"
        w="86%"
        ml="auto"
        mr="auto"
        // border="1px solid black"
        // h="100vh"
        mb="4rem"
      >
        <Text mb="2rem" textAlign="start" fontSize="5xl" fontWeight="800">
          Latest from the team
        </Text>
        <Grid cursor="pointer" templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/05/Susan-Wilkinson--Blog-.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Community
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Meet Susan Wilkinson
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Alex begin </Text>
                      <Text ml="1rem">July 14, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/06/DeepMind--Blog-.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Unsplash X DeepMind
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">June 20, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/05/Tim--Blog--2.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Meet the Unsplash Team:
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Tim Carbone
                    </Text>
                    <Flex color="gray.700" mt="-0.2rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">June 15, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/06/Amy-Shamblen--Twitter-.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Community
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Meet Amy Shamblen
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Alex begin </Text>
                      <Text ml="1rem">June 9, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/06/A_look_back_at_May_-Blog--1.jpeg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      A look back on May
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Annie Spratt </Text>
                      <Text ml="1rem">June 7, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/06/pride-Twitter-.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Pride in Open Photography
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Alex begin </Text>
                      <Text ml="1rem">June 1, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/05/The-Importance-of-Editing--Blog--3.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      How Edititng Can Transform
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      An Image
                    </Text>
                    <Flex color="gray.700" mt="0rem">
                      <Text>Alex begin </Text>
                      <Text ml="1rem">May 24, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/04/Bruno--Blog--1.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Meet the Unsplash Team:
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Bruno Agurre
                    </Text>
                    <Flex color="gray.700" mt="0rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">May 18, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/2022/05/Color-of-Water-Winners--Twitter--2.gif"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Top 15: Color of Water
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">May 12, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/05/Frankie_Cordoba_-Twitter--3.jpeg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Community
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Meet Frankie Cordoba
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">May 11, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/05/April-Round-up--Blog-.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      A look back on April
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Annie Spratt </Text>
                      <Text ml="1rem">May 6, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/05/Motherhood--Blog--2.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Community
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Motherhood and Photography
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Alex begin </Text>
                      <Text ml="1rem">May 5, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/05/Spring--Blog-.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Fresh ways to capture
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Spring
                    </Text>
                    <Flex color="gray.700" mt="0rem">
                      <Text>Alex begin </Text>
                      <Text ml="1rem">May 3, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/04/Olly--Blog-.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Meet the Unsplash Team:
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Olly Ash
                    </Text>
                    <Flex color="gray.700" mt="0rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">May 2, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="400px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/size/w600/2022/05/Digital_Nomad_-Blog-.jpeg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Digital Nomad
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">May 1, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Box
        cursor="pointer"
        _hover={{ color: "black", border: "1px solid black" }}
        color="gray.700"
        borderRadius="4px"
        pt="10px"
        textAlign="center"
        border="1px solid lightgray"
        mb="12rem"
        mt="6rem"
        ml="auto"
        mr="auto"
        w="160px"
        h="50px"
      >
        <Text>Load More Posts</Text>
      </Box>

      <Divider
        border="1px solid black"
        ml="auto"
        mr="auto"
        w="86%"
        mb="2rem"
        variant="solid"
        orientation="horizontal"
      ></Divider>

      <Box boxSizing="border-box">
        <Flex>
          <HStack spacing='10px' ml='6rem'>
          <Link to="/">
            <Image
              w="44px"
              h="48px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xuv6LDrfPyFSThNmHnnTdiJCEtdEc66Ek74mpouVt6H8rKEV"
            ></Image>
          </Link>
          <Text>Make something awesome</Text>
          </HStack>

          <Spacer></Spacer>

          <HStack spacing="22px"  mr='6.5rem'>
            <Text color="gray.700" _hover={{ color: "black" }}>About</Text>
            <Text color="gray.700" _hover={{ color: "black" }}>Press</Text>
            <Text color="gray.700" _hover={{ color: "black" }}>Join the team</Text>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Blog;
