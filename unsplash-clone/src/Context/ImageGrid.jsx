import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const ImageGrid = () => {
  const { imgs, searchedImg } = useContext(AuthContext);
  const [images, setImages] = useState([]);
  // const [query, setQuery] = useState('');

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
          gap={4}
        >
          {images !== '' && searchedImg === false
            ? (images.map((imgs) => (
                <GridItem rowSpan={1}>
                  <Image
                    w="400px"
                    h="400px"
                    borderRadius="6px"
                    src={imgs.urls.regular}
                  />
                </GridItem>
              )))
            : (imgs.map((img) => (
                <GridItem rowSpan={1}>
                  <Image
                    w="400px"
                    h="400px"
                    borderRadius="6px"
                    src={img.urls.regular}
                  />
                </GridItem>
              )))}
        </Grid>
      </Box>
    </>
  );
};

export default ImageGrid;
