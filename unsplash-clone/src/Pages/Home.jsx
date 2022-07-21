import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Divider,
  Image,
  Text,
  Spacer,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  HStack,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";
import ImageGrid from "../Context/ImageGrid";
import Home_EditorialTab from "./Home_EditorialTab";
import Home_CurrentEventTab from "./Home_CurrentEventTab";
import Home_WallpapersTab from "./Home_WallpapersTab";
import Home_3DRendersTab from "./Home_3DRendersTab";
import { AuthContext } from "../Context/AuthContext";
import ImageGrid_CurrentEvents from "./ImageGrid_CurrentEvents";
import ImageGrid_Wallpapers from "./ImageGrid_Wallpapers";
import ImageGrid_ThreeDRenders from "./ImageGrid_ThreeDRenders";

const Home = () => {

  // const {setTabIndex} = useContext(AuthContext);

  const [tabIndex, setTabIndex] = React.useState(0)

  return (
    <>
      <Navbar></Navbar>

      {/* Badge */}
      <Box>
        <Tabs onChange={(index) => setTabIndex(index)}>
          <TabList fontSize="2px">
            <Tab>Editorial</Tab>
            <Divider
              ml="1rem"
              mr="1rem"
              h="6px"
              orientation="vertical"
            ></Divider>
            <Tab>Current Events</Tab>
            <Tab>Wallpapers</Tab>
            <Tab>3D Renders</Tab>
            <Tab isDisabled>Textures & Patterns</Tab>
            <Tab isDisabled>Experimental</Tab>
            <Tab isDisabled>Architecture</Tab>
            <Tab isDisabled>Nature</Tab>
            <Tab isDisabled>Business & Work</Tab>
            <Tab isDisabled>Fashion</Tab>
            <Tab isDisabled>Film</Tab>
            <Tab isDisabled>Food & Drink</Tab>
            {/* <Tab>Health & Wellness</Tab> */}
            <Tab isDisabled>People</Tab>
            {/* <Tab>Interiors</Tab> */}
          </TabList>

          <TabPanels>
            {/* Editorial Tab Starts */}
            <TabPanel p="0">
              <Home_EditorialTab />
            </TabPanel>
            {/* Editorial Tab Ends */}

            {/* Current Event Tab Starts */}
            <TabPanel p="0">
              <Home_CurrentEventTab />
            </TabPanel>
            {/* Current Event Tab Ends */}

            {/* Wallpapers Event Tab Starts */}
            <TabPanel p='0'>
              <Home_WallpapersTab/>
            </TabPanel>
            {/* Wallpapers Event Tab Ends */}

            {/* 3DRenders Event Tab Starts */}
            <TabPanel p='0'>
              <Home_3DRendersTab/>
            </TabPanel>
            {/* 3DRenders Event Tab Ends */}

          </TabPanels>
        </Tabs>
      </Box>

      {/* Image Grid Section */}

      {
        tabIndex === 0 ?
        <ImageGrid></ImageGrid> :
        tabIndex === 1 ?
        <ImageGrid_CurrentEvents/> :
        tabIndex === 2 ?
        <ImageGrid_Wallpapers/> :
        tabIndex === 3 ?
        <ImageGrid_ThreeDRenders/> :
        <ImageGrid></ImageGrid>
      }

      // <ImageGrid></ImageGrid>

      <Footer />
    </>
  );
};

export default Home;
