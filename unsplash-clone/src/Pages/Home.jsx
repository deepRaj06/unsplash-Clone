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
import ImageGrid from "../Components/ImageGrid_Component/ImageGrid";
import Home_EditorialTab from "../Components/Home_TabsComponent/Home_EditorialTab";
import Home_CurrentEventTab from "../Components/Home_TabsComponent/Home_CurrentEventTab";
import Home_WallpapersTab from "../Components/Home_TabsComponent/Home_WallpapersTab";
import Home_3DRendersTab from "../Components/Home_TabsComponent/Home_3DRendersTab";
import { AuthContext } from "../Context/AuthContext";
import ImageGrid_CurrentEvents from "../Components/ImageGrid_Component/ImageGrid_CurrentEvents";
import ImageGrid_Wallpapers from "../Components/ImageGrid_Component/ImageGrid_Wallpapers";
import ImageGrid_ThreeDRenders from "../Components/ImageGrid_Component/ImageGrid_ThreeDRenders";
import Home_TextPatternsTab from "../Components/Home_TabsComponent/Home_TextPatternsTab";
import ImageGrid_TextPatternsTab from "../Components/ImageGrid_Component/ImageGrid_TextPatternsTab";
import Home_ExperimentalTab from "../Components/Home_TabsComponent/Home_ExperimentalTab";
import ImageGrid_ExperimentalTab from "../Components/ImageGrid_Component/ImageGrid_ExperimentalTab";
import Home_ArchitectureTab from "../Components/Home_TabsComponent/Home_ArchitectureTab";
import ImageGrid_ArchitectureTab from "../Components/ImageGrid_Component/ImageGrid_ArchitectureTab";
import Home_NatureTab from "../Components/Home_TabsComponent/Home_NatureTab";
import ImageGrid_NatureTab from "../Components/ImageGrid_Component/ImageGrid_NatureTab";
import Home_BusinessWorkTab from "../Components/Home_TabsComponent/Home_BusinessWorkTab";
import ImageGrid_BusinessWorkTab from "../Components/ImageGrid_Component/ImageGrid_BusinessWorkTab";
import Home_FashionTab from "../Components/Home_TabsComponent/Home_FashionTab";
import ImageGrid_FashionTab from "../Components/ImageGrid_Component/ImageGrid_FashionTab";
import Home_FilmTab from "../Components/Home_TabsComponent/Home_FilmTab";
import ImageGrid_FilmTab from "../Components/ImageGrid_Component/ImageGrid_FilmTab";
import Home_FoodDrinkTab from "../Components/Home_TabsComponent/Home_FoodDrinkTab";
import ImageGrid_FoodDrinkTab from "../Components/ImageGrid_Component/ImageGrid_FoodDrinkTab";
import Home_PeopleTab from "../Components/Home_TabsComponent/Home_PeopleTab";
import ImageGrid_PeopleTab from "../Components/ImageGrid_Component/ImageGrid_PeopleTab";

const Home = () => {

  // const {setTabIndex} = useContext(AuthContext);

  const [tabIndex, setTabIndex] = React.useState(0)

  return (
    <>
      <Navbar></Navbar>

      {/* Badge */}
      <Box>
        <Tabs onChange={(index) => setTabIndex(index)} isLazy>
          <TabList fontSize="2px">
            <Tab>Editorial</Tab>
            <Divider
            borderColor='black'
              variant='solid'
              mt='0.4rem'
              ml="0.6rem"
              mr="0.6rem"
              h="32px"
              orientation="vertical"
            ></Divider>
            <Tab>Current Events</Tab>
            <Tab>Wallpapers</Tab>
            <Tab>3D Renders</Tab>
            <Tab>Textures & Patterns</Tab>
            <Tab>Experimental</Tab>
            <Tab>Architecture</Tab>
            <Tab>Nature</Tab>
            <Tab>Business & Work</Tab>
            <Tab>Fashion</Tab>
            <Tab>Film</Tab>
            <Tab>Food & Drink</Tab>
            <Tab>People</Tab>
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

            {/* Textures & Patterns Event Tab Starts */}
            <TabPanel p='0'>
              <Home_TextPatternsTab/>
            </TabPanel>
            {/* Textures & Patterns Event Tab Ends */}

            {/* Experimental Event Tab Starts */}
            <TabPanel p='0'>
              <Home_ExperimentalTab/>
            </TabPanel>
            {/* Experimental Event Tab Ends */}

            {/* Architecture Tab Starts */}
            <TabPanel p='0'>
              <Home_ArchitectureTab/>
            </TabPanel>
            {/* Architecture Tab Ends */}

            {/* Nature Tab Starts */}
            <TabPanel p='0'>
              <Home_NatureTab/>
            </TabPanel>
            {/* Nature Tab Ends */}

            {/* Business & Work Tab Starts */}
            <TabPanel p='0'>
              <Home_BusinessWorkTab/>
            </TabPanel>
            {/* Business & Work Tab Ends */}

            {/* Fashion Tab Starts */}
            <TabPanel p='0'>
              <Home_FashionTab/>
            </TabPanel>
            {/* Fashion Tab Ends */}

            {/* Film Tab Starts */}
            <TabPanel p='0'>
              <Home_FilmTab/>
            </TabPanel>
            {/* Film Tab Ends */}

            {/* Food & Drink Tab Starts */}
            <TabPanel p='0'>
              <Home_FoodDrinkTab/>
            </TabPanel>
            {/* Food & Drink Tab Ends */}

            {/* People Tab Starts */}
            <TabPanel p='0'>
              <Home_PeopleTab/>
            </TabPanel>
            {/* People Tab Ends */}


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
        tabIndex === 4 ?
        <ImageGrid_TextPatternsTab/> :
        tabIndex === 5 ?
        <ImageGrid_ExperimentalTab/> :
        tabIndex === 6 ?
        <ImageGrid_ArchitectureTab/> :
        tabIndex === 7 ?
        <ImageGrid_NatureTab/> :
        tabIndex === 8 ?
        <ImageGrid_BusinessWorkTab/> :
        tabIndex === 9 ?
        <ImageGrid_FashionTab/> :
        tabIndex === 10 ?
        <ImageGrid_FilmTab/> :
        tabIndex === 11 ?
        <ImageGrid_FoodDrinkTab/> :
        tabIndex === 12 ?
        <ImageGrid_PeopleTab/> :
        <ImageGrid></ImageGrid>
      }

      {/* // <ImageGrid></ImageGrid> */}

      <Footer />
    </>
  );
};

export default Home;
