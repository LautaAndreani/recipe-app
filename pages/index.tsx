import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import NavBar from "../ui/NavBar";
import Filter from "../ui/Filter";
import MainContent from "../ui/MainContent";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import ViewRecipes from "../components/ViewRecipes";
import { FirebaseProps, MainProps } from "../types/interfaces";
import api from "../api";

interface dataProps {
  data: FirebaseProps[],
  favorite : FirebaseProps[],
  setFavorite: React.Dispatch<React.SetStateAction<FirebaseProps[]>>,
}

import { Box, useDisclosure } from "@chakra-ui/react";

const Home: NextPage<dataProps> = ({ data, favorite, setFavorite }) => {
  // React.useLayoutEffect = React.useEffect;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getDataFirebase, setGetDataFirebase] = useState<any>(data)
  const [recipe, setRecipe] = useState<MainProps>();
  const [reload, setReload] = useState<any>();
  const [isUpdate, setIsUpdate] = useState<Boolean>(false);

  //Filter recipes
  const filterRecipes = (value: string) => {
    if(value === "🍽 todos"){
      setGetDataFirebase(data)
      return
    }
    const newItems = getDataFirebase.filter((res:FirebaseProps) => res.category === value)
    setGetDataFirebase(newItems)
  }
  //Add to favorite
  const favoriteRecipe = (val:any) => {
    setFavorite(favorite.concat(val))
  }

  // const getData = async () => {
  //   const data = await api.recipes();
  //   setReload(data);
  // };
  

  // useEffect(() => {
  //   getData();
  //   //eslint-disable-next-line
  // }, [isUpdate]);

  return (
    <Box as="main" height="98vh" width="100%">
      <NavBar />
      <Filter filterRecipes={filterRecipes}/>
      <MainContent reload={reload} getDataFirebase={getDataFirebase} setRecipe={setRecipe} onOpen={onOpen} />
      <AddRecipe setIsUpdate={setIsUpdate} isUpdate={isUpdate} />
      {recipe && <ViewRecipes isOpen={isOpen} recipe={recipe} onClose={onClose} favoriteRecipe={favoriteRecipe}/>}
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
