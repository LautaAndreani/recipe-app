import React, { useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import NavBar from "../ui/NavBar";
import Filter from "../ui/Filter";
import MainContent from "../ui/MainContent";
import mock from "../mock";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import ViewRecipes from "../components/ViewRecipes";
import { MainProps } from "../types/interfaces";
import api from "../api";

import { Box, useDisclosure } from "@chakra-ui/react";

const Home: NextPage = ({ data }: any) => {
  React.useLayoutEffect = React.useEffect;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recipe, setRecipe] = useState<MainProps>();

  return (
    <Box as="main" height="98vh" width="100%">
      <NavBar />
      <Filter />
      <MainContent data={data} setRecipe={setRecipe} onOpen={onOpen} />
      <AddRecipe />
      {recipe && <ViewRecipes isOpen={isOpen} onClose={onClose} recipe={recipe} />}
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await api.recipes();
  return {
    props: { data },
  };
};
