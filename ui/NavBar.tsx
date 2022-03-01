import { Box, Input, InputGroup, Stack, Text, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import Link from "next/link";
import { Links } from "../types/interfaces";

const links:Links[] = [{text: "Inicio", route:"/" },{text: "Recetas", route:"/" }, {text: "Mis favoritos", route:"/favorites" }]

const NavBar = () => {
  return (
    <Stack position={"sticky"} top="5" zIndex="10" as="nav" justifyContent={"space-between"} direction="row" alignItems={"center"} bg="brand.navDark" color="brand.card" padding={5} margin="1rem" borderRadius={"xl"}>
      <Stack direction="row" alignItems={"center"} spacing={10}>
        <Text fontWeight={600} padding="10px 20px" bg="brand.primary" borderRadius={"md"}>
          RecipesAPP
        </Text>
        <Stack direction="row" fontWeight={500} spacing={5}>
          {links.map((link:Links, i:number) => 
          <Link key={i} href={link.route}>
            <Box as="a" cursor="pointer" _hover={{color:"brand.secondary"}}>{link.text}</Box>
          </Link>)}
        </Stack>
      </Stack>
      <Stack>
        <InputGroup>
          <InputLeftElement color="brand.icoColor" children={<Search2Icon />} />
          <Input width="26rem" type="text" border="1px solid" borderColor="brand.text" color="brand.textDark" placeholder="Buscar por receta, ingredientes o palabras claves" _placeholder={{ color: "brand.border", fontWeight: 500 }} />
        </InputGroup>
      </Stack>
    </Stack>
  );
};

export default NavBar;
