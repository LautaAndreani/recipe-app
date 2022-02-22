import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import NavBar from "../ui/NavBar";
import Filter from "../ui/Filter";
import MainContent from "../ui/MainContent";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import ViewRecipes from "../components/ViewRecipes";
import { MainProps } from "../types/interfaces";
import api from "../api";

import { Box, useDisclosure } from "@chakra-ui/react";

const Home: NextPage = ({ data }: any) => {
  React.useLayoutEffect = React.useEffect;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recipe, setRecipe] = useState<MainProps>();
  const [reload, setReload] = useState<any>();
  const [isUpdate, setIsUpdate] = useState<Boolean>(false);

  const getData = async () => {
    const data = await api.recipes();
    setReload(data);
  };

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [isUpdate]);

  return (
    <Box as="main" height="98vh" width="100%">
      <NavBar />
      <Filter />
      <MainContent reload={reload} data={data} setRecipe={setRecipe} onOpen={onOpen} />
      <AddRecipe setIsUpdate={setIsUpdate} isUpdate={isUpdate} />
      {recipe && <ViewRecipes isOpen={isOpen} onClose={onClose} recipe={recipe} />}
    </Box>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await api.recipes();
  return {
    props: { data },
  };
};
