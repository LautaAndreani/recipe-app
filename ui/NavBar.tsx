import React from "react";
import { Box, Input, InputGroup, Stack, Text, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Link from "next/link";

const NavBar = () => {
  return (
    <Stack position={"sticky"} top="5" as="nav" justifyContent={"space-between"} direction="row" alignItems={"center"} bg="brand.nav" padding={5} margin="1rem" borderRadius={"xl"}>
      <Stack direction="row" alignItems={"center"} spacing={10}>
        <Text color="brand.bg" fontWeight={600} padding="10px 20px" bg="brand.primary" borderRadius={"md"}>
          RecipesAPP
        </Text>
        <Stack direction="row" fontWeight={500} spacing={5} color="brand.text">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/">
            <a>Recetas</a>
          </Link>
          <Link href="/">
            <a>Mis Favoritos</a>
          </Link>
        </Stack>
      </Stack>
      <Stack>
        <InputGroup>
          <InputLeftElement children={<Search2Icon />} />
          <Input width="26rem" type="text" border="1px solid" borderColor="brand.text" placeholder="Buscar por receta, ingredientes o palabras claves" _placeholder={{ color: "brand.border", fontWeight: 500 }} />
        </InputGroup>
      </Stack>
    </Stack>
  );
};

export default NavBar;
