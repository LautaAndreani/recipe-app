import {useState} from "react"
import type {  NextPage } from "next";

import { Box, useDisclosure } from "@chakra-ui/react";
import NavBar from "../ui/NavBar";
import Filter from "../ui/Filter";
import MainContent from "../ui/MainContent";
import mock from "../mock";
import AddRecipe from "../components/AddRecipe";
import ViewRecipes from "../components/ViewRecipes";
import {MainProps} from "../types/interfaces"

const Home: NextPage = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [recipe, setRecipe] = useState<MainProps>();
  

  return (
    <Box as="main" height="98vh" width="100%">
      <NavBar />
      <Filter />
      <MainContent mock={mock} setRecipe={setRecipe} />
      <AddRecipe onOpen={onOpen}/>
      {recipe && <ViewRecipes isOpen={isOpen} onClose={onClose} recipe={recipe} />
}    </Box>
  );
};

export default Home;
