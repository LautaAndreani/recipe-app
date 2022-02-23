import { Box, Select, Stack } from "@chakra-ui/react";

const SelectCategory = ({ ...res }: any) => {
  const filterContent: string[] = ["🍪 desayuno", " 🍕 almuerzo", " 🍵 merienda", "🌙 cena", "☀️ es indistinto"];
  return (
    <Stack direction="row">
      <Select fontWeight={500} bg="brand.navDark" width={"100%"} {...res} id="category" borderColor="gray">
        {filterContent.map((opt: string, i: number) => (
          <option style={{ backgroundColor: "#222526" }} value={opt} key={i}>
            {opt}
          </option>
        ))}
      </Select>
    </Stack>
  );
};

export default SelectCategory;
