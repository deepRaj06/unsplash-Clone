import { Box, Divider, Flex, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Box mt="4rem" w="86%" ml="auto" mr="auto" mb="1rem" h="400px">
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
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  About
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Blog
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Community
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Join the team
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Developers/API
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Press
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Help Center
                </Text>
              </VStack>
            </Flex>
          </Box>

          <Spacer></Spacer>

          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <VStack spacing="8px" alignItems="flex-start">
                <Text fontWeight="600">Product</Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Explore
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Unsplash Awards
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Unsplash for Education
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Unsplash for iOS
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Apps & Plugins
                </Text>
              </VStack>
            </Flex>
          </Box>

          <Spacer></Spacer>

          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <VStack spacing="8px" alignItems="flex-start">
                <Text fontWeight="600">Popular</Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Backgrounds
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Free Images
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Free Stock Photos
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Happy Birthday Images
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Cool Photos
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Nature Pictures
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Black Backgrounds
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  White Backgrounds
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Textures
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Desktop Backgrounds
                </Text>
              </VStack>
            </Flex>
          </Box>

          <Spacer></Spacer>

          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <VStack spacing="8px" alignItems="flex-start">
                <Text fontWeight="600">Wallpapers</Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  HD Wallpapers
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  4k Wallpapers
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  iPhone Wallpapers
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Cool Wallpapers
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Cute Wallpapers
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Live Wallpapers
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  PC Wallpapers
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Black Wallpapers
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  iPad Wallpapers
                </Text>
                <Text
                  _hover={{ cursor: "pointer", color: "black" }}
                  color="gray"
                >
                  Desktop Wallpapers
                </Text>
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

      <Box mt="4rem" w="86%" ml="auto" mr="auto" mb="1rem" h="100px">
        <Flex>
          <HStack spacing="20px" p="10px">
            <Text _hover={{ cursor: "pointer", color: "black" }} color="gray">
              Privacy Policy
            </Text>
            <Text _hover={{ cursor: "pointer", color: "black" }} color="gray">
              Terms
            </Text>
            <Text _hover={{ cursor: "pointer", color: "black" }} color="gray">
              Security
            </Text>
          </HStack>

          <Spacer></Spacer>

          <HStack spacing="20px" p="10px">
            <Icon
              _hover={{ cursor: "pointer", color: "black" }}
              color="gray"
              w={6}
              h={6}
              as={BsTwitter}
            />
            <Icon
              _hover={{ cursor: "pointer", color: "black" }}
              color="gray"
              w={6}
              h={6}
              as={BsFacebook}
            />
            <Icon
              _hover={{ cursor: "pointer", color: "black" }}
              color="gray"
              w={6}
              h={6}
              as={BsInstagram}
            />
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
