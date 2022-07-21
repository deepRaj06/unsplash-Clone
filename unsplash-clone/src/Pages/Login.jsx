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
import React, { useContext, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
// import {FaFacebook} from '@chakra-ui/icons'
import { FaFacebook } from "react-icons/fa";
import { Input } from "@chakra-ui/input";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email !== "" && form.password !== "") {
      // console.log(form);
      axios({
        url:'https://reqres.in/api/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {...form}
      })
      .then((res) => {
        // console.log(res)
        alert('Login Successfull☺️');
        auth.handleLogin(res.token);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      setIsError(true);
    }
  };

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
              w={486}
              bg="#1778f2"
              colorScheme="#1778f2"
              leftIcon={<FaFacebook />}
            >
              Login with Facebook
            </Button>
          </VStack>

          <Text>OR</Text>

          <FormControl isInvalid={isError}>
            <Stack spacing={2}>
              <Text w={510} textAlign="start">
                Email
              </Text>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleForm}
              />
              {!isError ? (
                ""
              ) : (
                <FormErrorMessage>
                  Email and Password are required.
                </FormErrorMessage>
              )}
              <Flex>
                <Text>Password</Text>
                <Spacer></Spacer>
                <Text as="u">Forgot your password?</Text>
              </Flex>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={handleForm}
              />
            </Stack>

            <Button
              mr="auto"
              ml="auto"
              mt="2rem"
              type="submit"
              onClick={handleSubmit}
              w={486}
              bg="black"
              colorScheme="teal"
            >
              Login
            </Button>
          </FormControl>

          <Box w="340px" h="120px" border="1px solid lightgray">
            <Flex mt="2.4rem" justifyContent="center">
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
