import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
// import {FaFacebook} from '@chakra-ui/icons'
import { FaFacebook } from "react-icons/fa";
import { Input } from "@chakra-ui/input";
const Login = () => {
  return (
    <>
      <Container>
        <VStack spacing="10px">
          <Link to="/">
            <Image
              w="120px"
              h="140px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xuv6LDrfPyFSThNmHnnTdiJCEtdEc66Ek74mpouVt6H8rKEV"
            ></Image>
          </Link>
          <Heading>Login</Heading>
          <VStack spacing="30px">
            <Text>Welcome back.</Text>
            <Button
              w={510}
              bg="#1778f2"
              // colorScheme="facebook"
              colorScheme="#1778f2"
              leftIcon={<FaFacebook />}
            >
              Login with Facebook
            </Button>
          </VStack>

          <Text>OR</Text>
          <Stack spacing={2}>
            <Text w={510} textAlign="start">
              Email
            </Text>
            <Input />
            <Flex>
              <Text>Password</Text>
              <Spacer></Spacer>
              <Text as="u">Forgot your password?</Text>
            </Flex>
            <Input />
          </Stack>
          <Button w={510} bg="black" colorScheme="teal">
            Login
          </Button>
          <Box w="340px" h="120px" border="1px solid lightgray">
            <Flex 
            mt='2.4rem'
            justifyContent="center">
              <Text>Don't have an account?</Text>
              <Text as="u">Join Unsplash</Text>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Login;
