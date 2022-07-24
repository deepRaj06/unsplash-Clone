import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  position,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const leftImgText = {
    position: "absolute",
    top: "140px",
    left: "20px",
    background: "none",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  const leftFirstText = {
    position: "absolute",
    top: "340px",
    left: "20px",
    background: "none",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    fontWeight: "600",
  };

  const leftSecText = {
    position: "absolute",
    top: "420px",
    left: "20px",
    background: "none",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    fontWeight: "600",
  };

  const leftThirdText = {
    position: "absolute",
    top: "450px",
    left: "20px",
    background: "none",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    fontWeight: "600",
  };

  const leftFourText = {
    position: "absolute",
    bottom: "50px",
    left: "20px",
    background: "none",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    fontWeight: "600",
  };

  const navigate = useNavigate();

  const [signUpInfos, setSignUpInfos] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleSignUpInfo = (e) => {

    const {name, value} = e.target;

    setSignUpInfos({
      ...signUpInfos,
      [name] : value
    })
  }

  const navigateToLogin = (e) => {
    e.preventDefault();
    axios({
      url: 'http://localhost:3004/signupInfo',
      // url: 'https://powerful-river-53229.herokuapp.com/signupInfo',
      method: 'POST',
      data: {...signUpInfos}
    })
    .then((res) => {
      console.log(res);
      navigate('/login');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <Box>
        <Flex>
          <Box
            w="40%"
            style={{
              position: "fixed",
              height: "100%",
              width: "40%",
              zIndex: "1",
              top: "0",
              left: "0",
              overflowY: "hidden",
            }}
          >
            <Box>
              <Image src="https://images.unsplash.com/photo-1658268966789-e6e17ff4cf51?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"></Image>
            </Box>

            <Box style={leftImgText}>
              <Link to="/">
                <Image
                  w="44px"
                  h="48px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xuv6LDrfPyFSThNmHnnTdiJCEtdEc66Ek74mpouVt6H8rKEV"
                ></Image>
              </Link>
            </Box>

            <Text style={leftFirstText} fontSize="5xl">
              Creation starts here
            </Text>

            <Text style={leftSecText} fontSize="2xl">
              Access 4,070,212 free, high-resolution photos
            </Text>

            <Text style={leftThirdText} fontSize="2xl">
              you can’t find anywhere else{" "}
            </Text>

            <Text style={leftFourText} fontSize="1xl">
              Uploaded about 17 hours ago by Lana Graves
            </Text>
          </Box>

          <Box marginLeft="52%">
            <Flex flexDirection="column">
              <Container>
                <Text mt="4rem" fontWeight="600" mb="1rem" fontSize="6xl">
                  Join Unsplash
                </Text>
                <Flex justifyContent="center" mb="4rem">
                  <Text mr="6px">Already have an account?</Text>
                  <Text cursor="pointer" color="gray" as="u">
                    Login
                  </Text>
                </Flex>
                <Button
                  w={510}
                  bg="#1778f2"
                  mb="2rem"
                  colorScheme="#1778f2"
                  leftIcon={<FaFacebook />}
                >
                  Login with Facebook
                </Button>
                <Text mb="2rem">OR</Text>

                <VStack spacing="10px" alignItems="flex-start">
                  <Flex flexDirection="column">
                    {/* <VStack> */}

                    <Flex>
                      <HStack spacing="190px">
                        <Text>First name</Text>
                        <Text>Last name</Text>
                      </HStack>
                    </Flex>

                    <Spacer></Spacer>

                    <Flex>
                      <HStack spacing="10px">
                        <Input
                          name="firstName"
                          value={signUpInfos.firstName}
                          onChange={handleSignUpInfo}
                          w={250}
                        ></Input>

                        <Input
                          name="lastName"
                          value={signUpInfos.lastName}
                          onChange={handleSignUpInfo}
                          w={250}
                        ></Input>
                      </HStack>
                    </Flex>
                  </Flex>

                  <Text textAlign="start">Email</Text>
                  <Input
                    type="email"
                    name="email"
                    value={signUpInfos.email}
                    onChange={handleSignUpInfo}
                    w={510}
                  ></Input>

                  <Flex>
                    <Text>Username</Text>
                    <Text color="gray">
                      (only letters, numbers, and underscores)
                    </Text>
                  </Flex>
                  <Input
                    name="username"
                    value={signUpInfos.username}
                    onChange={handleSignUpInfo}
                    w={510}
                  ></Input>

                  <Flex>
                    <Text>Password</Text>
                    <Text color="gray">(min. 8 char)</Text>
                  </Flex>
                  <Input 
                  name='password'
                  value={signUpInfos.password}
                  onChange={handleSignUpInfo}
                  minlength="8" 
                  mb="1rem" 
                  w={510}>                   
                  </Input>
                </VStack>

                <Button 
                onClick={navigateToLogin}
                mt="2rem" 
                w={510} 
                bg="black" 
                colorScheme="blackAlpha">
                  Join
                </Button>

                <Flex mb="4rem" mt="2rem" justifyContent="center">
                  <Text>By joining, you agree to the</Text>
                  <Text cursor="pointer" ml="6px" as="u">
                    Terms
                  </Text>
                  <Text ml="6px">and</Text>
                  <Text cursor="pointer" ml="6px" as="u">
                    Privacy Policy.
                  </Text>
                </Flex>
              </Container>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Signup;
