import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Link,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { MdOpenInNew } from "react-icons/md";

const ImageGrid = () => {
  const { imgs, searchedImg } = useContext(AuthContext);
  const [images, setImages] = useState([]);

  const API = "MCBGgZpaIiuWqzkVd7s2LPheovdkvFKFdTmRNd47b1M";

  useEffect(() => {
    axios({
      url: `https://api.unsplash.com/search/photos/?query=editorial&per_page=100&client_id=${API};`,
      method: "GET",
    }).then((res) => {
      console.log(res.data.results);
      setImages(res.data.results);
    });
  }, []);

  return (
    <>
      <Box mt="4rem" w="86%" ml="auto" mr="auto">
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
                    background="rgba(0, 0, 0, 0.4)"
                    w="400px"
                    h="400px"
                    transition=".5s ease"
                    opacity="0"
                    color="white"
                    _hover={{
                      opacity: 1,
                    }}
                  >
                    <Flex flexDirection="column">
                      <Box p="10px" textAlign="end">
                          <Link
                            href={imgs.links.download}
                            target="_blank"
                            
                          >
                            <Icon
                              color="whiteAlpha.800"
                              textAlign="end"
                              w={8}
                              h={8}
                              as={MdOpenInNew}
                              _hover={{
                                color: "white",
                                cursor: "pointer",
                              }}
                            ></Icon>
                          </Link>
                      </Box>
                      <Flex p="10px" mt="18rem">
                        <Text alignContent="flex-end">{imgs.user.name}</Text>
                        <Spacer></Spacer>

                        <Tooltip label="Click to download" closeOnClick={true}>
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
                        </Tooltip>
                      </Flex>
                    </Flex>
                  </Box>
                </GridItem>
              ))
            : imgs.map((img) => (
                <GridItem
                  boxSizing="border-box"
                  position="relative"
                  rowSpan={1}
                >
                  <Image
                    w="400px"
                    h="400px"
                    borderRadius="6px"
                    src={img.urls.regular}
                    cursor="zoom-in"
                  />

                  <Box
                    position="absolute"
                    bottom="0"
                    background="rgba(0, 0, 0, 0.4)"
                    w="400px"
                    h="400px"
                    transition=".5s ease"
                    opacity="0"
                    color="white"
                    _hover={{
                      opacity: 1,
                    }}
                  >
                    <Flex flexDirection="column">
                      <Box p="10px" textAlign="end">
                          <Link
                            href={img.links.download}
                            target="_blank"
                            download
                          >
                            <Icon
                              color="whiteAlpha.800"
                              textAlign="end"
                              w={8}
                              h={8}
                              as={MdOpenInNew}
                              _hover={{
                                color: "white",
                                cursor: "pointer",
                              }}
                            ></Icon>
                          </Link>
                      </Box>
                      <Flex p="10px" mt="18rem">
                        <Text alignContent="flex-end">{img.user.name}</Text>
                        <Spacer></Spacer>
                        <Tooltip label="Click to download" closeOnClick={true}>
                          <Link
                            href={img.links.download + `&force=true`}
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
                        </Tooltip>
                      </Flex>
                    </Flex>
                  </Box>
                </GridItem>
              ))}
        </Grid>
      </Box>
    </>
  );
};

export default ImageGrid;
