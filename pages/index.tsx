import type { GetStaticProps, NextPage } from "next";
import { Box } from "@chakra-ui/react";
import NavBar from "../ui/NavBar";
import Filter from "../ui/Filter";
import MainContent from "../ui/MainContent";
import mock from "../mock";

const Home: NextPage = () => {
  return (
    <Box as="main">
      <NavBar />
      <Filter />
      <MainContent mock={mock} />
    </Box>
  );
};

export default Home;
