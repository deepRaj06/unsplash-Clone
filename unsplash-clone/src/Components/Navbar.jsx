import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Icon,
  IconButton,
  Image,
  Select,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AuthContext } from "../Context/AuthContext";
import NavbarSearchBar from "./Navbar_SearchBar_Component/NavbarSearchBar";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../Firebase/config";
import { signInWithPopup } from "firebase/auth";

const Navbar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  const [signUpDetails, setSignUpDetails] = useState([]);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.displayName);
        localStorage.setItem("unsplash_userName", data.user.displayName);
        if (value) {
          navigate("/");
        }
      })
      .catch((error) => {
        navigate("/login");
      });
  };

  const userDet = localStorage.getItem("unsplash_userName");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setValue(localStorage.getItem("unsplash_userName"));
    axios({
      // url: 'http://localhost:3004/signupInfo',
      url: "https://shrouded-hamlet-12771.herokuapp.com/signupInfo",
      method: "GET",
    }).then((res) => {
      setSignUpDetails([...signUpDetails, ...res.data]);
    });
  }, []);

  return (
    <>
      <Box p={2}>
        <Flex>
          <HStack spacing="26px">
            <Link to="/">
              <Image
                w="44px"
                h="48px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xuv6LDrfPyFSThNmHnnTdiJCEtdEc66Ek74mpouVt6H8rKEV"
              ></Image>
            </Link>
            <NavbarSearchBar />
            <Text>
              <Link to="/explore">Explore</Link>
            </Text>
            <Text>
              <Link to="/advertise">Advertise</Link>
            </Text>
            <Text>
              <Link to="/blog">Blog</Link>
            </Text>
            <Divider orientation="vertical" />
            {!isAuth && userDet === null ? (
              <HStack spacing="6px">
                <Text>
                  <Link to="/login">Login</Link>
                </Text>
                <Text>
                  {
                    signUpDetails === null ||
                    "" ||
                    signUpDetails.length === 0 ? (
                      <Link to="/signup"> / Signup</Link>
                    ) : (
                      <Tooltip
                        label="Hurray! SignUp Done Please Login🙂"
                        aria-label="A tooltip"
                      >
                        / SignUp
                      </Tooltip>
                    )
                    //  '/  SignUp'
                  }
                </Text>
              </HStack>
            ) : (
              <>
                {userDet === "" || userDet === null ? (
                  <Icon
                    ml="2rem"
                    mr="2rem"
                    w={6}
                    h={6}
                    as={BiUserCircle}
                  ></Icon>
                ) : (
                  <>
                    <Text>Welcome {userDet}</Text>
                    <Button
                      _hover={{
                        borderColor: "#000",
                        boxShadow: "0 1px 1px #0000000a",
                      }}
                      colorScheme="whitesmoke"
                      variant="outline"
                      borderColor="lightgrey"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                )}
              </>
            )}
            {!isAuth && userDet === null ? (
              <Button
                leftIcon={<FcGoogle />}
                _hover={{
                  borderColor: "#000",
                  boxShadow: "0 1px 1px #0000000a",
                }}
                colorScheme="whitesmoke"
                variant="outline"
                borderColor="lightgrey"
                onClick={handleGoogleLogin}
              >
                <Text color="grey">Login with Google</Text>
              </Button>
            ) : (
              ""
            )}

            <Popover placement="bottom-end">
              <PopoverTrigger>
                <ButtonGroup colorScheme="whitesmoke" variant="ghost">
                  <IconButton icon={<HamburgerIcon w="1.4em" h="1.4em" />} />
                </ButtonGroup>
              </PopoverTrigger>
              <PopoverContent minW="600px" p="1rem" boxSizing="border-box">
                <PopoverBody>
                  <Box>
                    <Container>
                      <Flex alignContent="flex-start">
                        <HStack spacing="50px">
                          <Box pb="4rem">
                            <Flex
                              flexDirection="column"
                              alignItems="flex-start"
                            >
                              <Text fontWeight="600" color="black" mb="1rem">
                                Business
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
                                  History
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
                                  Press
                                </Text>
                                <Text
                                  _hover={{ cursor: "pointer", color: "black" }}
                                  color="gray"
                                >
                                  Contact Us
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

                          <Box pb="8rem">
                            <Flex
                              flexDirection="column"
                              alignContent="flex-start"
                            >
                              <Text
                                fontWeight="600"
                                color="black"
                                textAlign="start"
                                mb="1rem"
                              >
                                Product
                              </Text>
                              <VStack spacing="8px" alignItems="flex-start">
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
                                  Unsplash Dataset
                                </Text>
                                <Text
                                  _hover={{ cursor: "pointer", color: "black" }}
                                  color="gray"
                                >
                                  Unsplsh for iOS
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

                          <Box>
                            <Flex
                              flexDirection="column"
                              alignContent="flex-start"
                            >
                              <Text
                                fontWeight="600"
                                color="black"
                                textAlign="start"
                                mb="1rem"
                              >
                                Community
                              </Text>
                              <VStack spacing="8px" alignItems="flex-start">
                                <Text
                                  _hover={{ cursor: "pointer", color: "black" }}
                                  color="gray"
                                >
                                  Become a Contributor
                                </Text>
                                <Text
                                  _hover={{ cursor: "pointer", color: "black" }}
                                  color="gray"
                                >
                                  Topics
                                </Text>
                                <Text
                                  _hover={{ cursor: "pointer", color: "black" }}
                                  color="gray"
                                >
                                  Collections
                                </Text>
                                <Text
                                  _hover={{ cursor: "pointer", color: "black" }}
                                  color="gray"
                                >
                                  Trends
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
                                  Stats
                                </Text>
                              </VStack>
                              <Flex>
                                <HStack
                                  spacing="20px"
                                  pt="10px"
                                  pb="6px"
                                  mt="1rem"
                                  mb="1rem"
                                >
                                  <Icon
                                    _hover={{
                                      cursor: "pointer",
                                      color: "black",
                                    }}
                                    color="gray"
                                    w={4}
                                    h={4}
                                    as={BsTwitter}
                                  />
                                  <Icon
                                    _hover={{
                                      cursor: "pointer",
                                      color: "black",
                                    }}
                                    color="gray"
                                    w={4}
                                    h={4}
                                    as={BsFacebook}
                                  />
                                  <Icon
                                    _hover={{
                                      cursor: "pointer",
                                      color: "black",
                                    }}
                                    color="gray"
                                    w={4}
                                    h={4}
                                    as={BsInstagram}
                                  />
                                </HStack>
                              </Flex>
                            </Flex>
                          </Box>
                        </HStack>
                      </Flex>
                    </Container>

                    <Divider orientation="horizontal" variant="solid"></Divider>

                    <Box>
                      <Flex>
                        <HStack spacing="20px">
                          <Text
                            _hover={{ cursor: "pointer", color: "black" }}
                            color="gray"
                          >
                            License
                          </Text>
                          <Text
                            _hover={{ cursor: "pointer", color: "black" }}
                            color="gray"
                          >
                            Privacy Policy
                          </Text>
                          <Text
                            _hover={{ cursor: "pointer", color: "black" }}
                            color="gray"
                          >
                            Terms
                          </Text>
                          <Text
                            _hover={{ cursor: "pointer", color: "black" }}
                            color="gray"
                          >
                            Security
                          </Text>
                        </HStack>

                        <Spacer></Spacer>

                        <Select
                          w="110px"
                          h="40px"
                          border="none"
                          placeholder="English"
                        >
                          <option value="option1">Spanish</option>
                          <option value="option2">Espanol</option>
                        </Select>
                      </Flex>
                    </Box>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
