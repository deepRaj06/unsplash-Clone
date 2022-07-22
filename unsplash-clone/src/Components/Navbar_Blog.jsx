import { Box, Flex, HStack, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { MdNorthEast } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar_Blog = () => {
  return (
    <>
      <Box p={2}>
        <Flex>
          <Link to="/">
            <Image
              w="64px"
              h="58px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xuv6LDrfPyFSThNmHnnTdiJCEtdEc66Ek74mpouVt6H8rKEV"
            ></Image>
          </Link>

          <Spacer></Spacer>
          <HStack spacing='24px'>
          <Text cursor='pointer' _hover={{color: 'black'}} color='blackAlpha.700'>Home</Text>
          <Text cursor='pointer' _hover={{color: 'black'}} color='blackAlpha.700'>Announcements</Text>
          <Text cursor='pointer' _hover={{color: 'black'}} color='blackAlpha.700'>Product</Text>
          <Text cursor='pointer' _hover={{color: 'black'}} color='blackAlpha.700'>Brands</Text>
          <Text cursor='pointer' _hover={{color: 'black'}} color='blackAlpha.700'>Partnerships</Text>
          <Text cursor='pointer' _hover={{color: 'black'}} color='blackAlpha.700'>Community</Text>
          </HStack>
          <Spacer></Spacer>

          <Link to="/">
            <Flex p={3}>
              <Text  cursor='pointer' _hover={{color: 'black'}} color='blackAlpha.700'>unsplash.com</Text>
              <Icon ml='4px' mt='6px' as={MdNorthEast}></Icon>
            </Flex>
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar_Blog;
