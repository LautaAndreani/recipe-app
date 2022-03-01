import { Box } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../../ui/NavBar";

const Layout = ({children}:any) => {
  return (
    <>
    <Head>
      <title>Mis favoritos</title>
    </Head>
    <Box>
      <NavBar/>
      <Box>{children}</Box>
    </Box>
    </>
  )
}

export default Layout