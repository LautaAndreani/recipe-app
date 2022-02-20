import { Box, Select, Stack } from "@chakra-ui/react";

const SelectCategory = ({ ...res }: any) => {
  const filterContent: string[] = ["🍪 desayuno", " 🍕 almuerzo", " 🍵 merienda", "🌙 cena"];
  return (
    <Stack direction="row">
      <Select fontWeight={500} bg="brand.nav" placeholder="Selecciona una opción" width={"100%"} {...res} id="category">
        {filterContent.map((opt: string, i: number) => (
          <Box as="option" value={opt} key={i}>
            {opt}
          </Box>
        ))}
      </Select>
    </Stack>
  );
};

export default SelectCategory;
