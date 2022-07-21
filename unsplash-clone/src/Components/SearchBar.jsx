import { Search2Icon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { MdCenterFocusWeak } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";

const SearchBar = () => {
  const { setImgs, setSearchedImg } = useContext(AuthContext);

  const [homeQuery, setHomeQuery] = useState("");
  const API = "MCBGgZpaIiuWqzkVd7s2LPheovdkvFKFdTmRNd47b1M";

  const handleSearch = () => {
    axios({
      url: `https://api.unsplash.com/search/photos/?query=${homeQuery}&per_page=100&client_id=${API};`,
      method: "GET",
    }).then((res) => {
      setSearchedImg(true);
      setImgs(res.data.results);
    });
  };

  return (
    <>
      <InputGroup w="900px">
        <InputLeftElement
          pt="0.6rem"
          children={<Search2Icon color="gray.400" />}
          onClick={() => handleSearch()}
          cursor="pointer"
        />
        <Input
          value={homeQuery}
          onChange={(e) => setHomeQuery(e.target.value)}
          color="gray.900"
          border="1px solid #0000"
          borderRadius="4px"
          backgroundColor="#eee"
          h="50px"
          type="text"
          placeholder="Search free high-resolution photos"
        />
        <InputRightElement
          pt="0.6rem"
          children={<MdCenterFocusWeak color="gray.400" />}
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
