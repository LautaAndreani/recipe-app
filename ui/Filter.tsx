import React from "react";

import { BsFilter } from "react-icons/bs";
import { Box, Center, Icon, Select, Stack, Button } from "@chakra-ui/react";

const filterContent: string[] = ["🍪 desayuno", " 🍕 almuerzo", " 🍵 merienda", "🌙 cena"];

const Filter = () => {
  return (
    <Center alignItems="center" justifyContent={"center"} margin="0 auto" textAlign={"center"}>
      <Box>
        <Box as="span" fontWeight={600} margin={"0 1rem"} marginTop={5} display="flex" alignItems={"center"} justifyContent="center" height="2rem" padding={5} borderRadius="md" _hover={{}}>
          Filtrar por
          <Icon as={BsFilter} marginTop={1} marginLeft={2} />
        </Box>
      </Box>
      <Stack direction="row" marginTop={5}>
        <Select fontWeight={500} bg="brand.nav" placeholder="Selecciona una opción" width={"100%"}>
          {filterContent.map((opt: string, i: number) => (
            <Box as="option" value={opt} key={i}>
              {opt}
            </Box>
          ))}
        </Select>
      </Stack>
    </Center>
  );
};

export default Filter;
