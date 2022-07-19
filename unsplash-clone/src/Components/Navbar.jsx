import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  MenuButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  HamburgerIcon,
  CheckIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { MdCenterFocusWeak } from "react-icons/md";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box p={2}>
        <Flex>
          <HStack spacing="30px">
            <Link to="/">
              <Image
                w="44px"
                h="48px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xuv6LDrfPyFSThNmHnnTdiJCEtdEc66Ek74mpouVt6H8rKEV"
              ></Image>
            </Link>
            <InputGroup w="760px">
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.400" />}
              />
              <Input
                border="1px solid #0000"
                borderRadius="24px"
                backgroundColor="#eee"
                h="40px"
                type="tel"
                placeholder="Search free high-resolution photos"
              />
              <InputRightElement
                children={<MdCenterFocusWeak color="gray.400" />}
              />
            </InputGroup>

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
            <HStack spacing="10px">
              <Text>
                <Link to="/login">Login</Link>
              </Text>
              <Text>/</Text>
              <Text>
                <Link to="/signup">Signup</Link>
              </Text>
            </HStack>

            <Button
              _hover={{
                borderColor: "#000",
                boxShadow: "0 1px 1px #0000000a",
              }}
              colorScheme="whitesmoke"
              variant="outline"
              borderColor='lightgrey'
            >
              Submit a photo
            </Button>

            <Popover placement="bottom-start">
              <PopoverTrigger>
                <ButtonGroup colorScheme="whitesmoke" variant="ghost">
                  <IconButton icon={<HamburgerIcon w="1.4em" h="1.4em" />} />
                </ButtonGroup>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader fontWeight="semibold">
                  Popover placement
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
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
