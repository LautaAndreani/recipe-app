import React from "react";

import { BsFilter } from "react-icons/bs";
import { Box, Center, Icon, Select, Stack, Button } from "@chakra-ui/react";

const filterContent: string[] = ["🍽 todos","🍪 desayuno", " 🍕 almuerzo", " 🍵 merienda", "🌙 cena", "☀️ es indistinto"];

const Filter = ({ filterRecipes}: any) => {
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    filterRecipes(e.target.value)
  }
  return (
    <>
      <Center alignItems="center" justifyContent={"center"} margin="0 auto" textAlign={"center"} color="brand.textDark" flexWrap={"wrap"}>
        <Box>
          <Box as="span" fontWeight={600} margin={"0 1rem"} mt={5} d="flex" alignItems={"center"} justifyContent="center" height="2rem" p={5} borderRadius="md" _hover={{}}>
            Filtrar por
            <Icon as={BsFilter} marginTop={1} marginLeft={2} />
          </Box>
        </Box>
        <Stack direction="row" marginTop={5}>
          <Select cursor="pointer" borderColor={"gray"} fontWeight={500} bg="brand.navDark" onChange={handleChange} width={{ base: "100%", md: "20rem" }}>
            {filterContent.map((opt: string, i: number) => (
              <option style={{ backgroundColor: "#222526" }} value={opt} key={i}>
                {opt}
              </option>
            ))}
          </Select>
        </Stack>
      </Center>
    </>
  );
};

export default Filter;
