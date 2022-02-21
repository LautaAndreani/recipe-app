import { Badge, Box, Center, Divider, Flex, Icon, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IngredientsProps } from "../../types/interfaces";

const Recipe = ({ res, setRecipe, onOpen }: any) => {
  return (
    <Box
      cursor="pointer"
      bg="brand.cardDark"
      color="brand.textDark"
      borderRadius={"md"}
      onClick={() => {
        setRecipe(res);
        onOpen();
      }}
    >
      <Box height="10rem" overflow={"hidden"} borderRadius={"md"} objectFit="cover">
        <Image src={"https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={res.title} transition=".2s all" _hover={{ transform: "scale(1.08)" }} />
      </Box>
      <Stack padding={3}>
        <Text as="h2" fontSize={"1.2rem"} fontWeight={600}>
          {res.title}
        </Text>
        <Center as="span" margin="1rem 0" width="100%" height=".1rem" bg="lightgray"></Center>
        <Stack direction="row" mt={2} justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" width="100%" justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
              <Icon as={AiOutlineClockCircle} />
              <Text as="small" fontWeight={500} marginLeft={2}>
                {res.time}
              </Text>
            </Flex>
            <Stack direction="row" spacing={1} overflow={"hidden"}>
              {res.ingredientsArr.map((name: IngredientsProps, i: number) => (
                <Badge key={i} as="small" variant={"subtle"} bg="#0c4e2c" color="#a0d9be" borderRadius={"full"}>
                  {name.ingredients.ingrediente}
                </Badge>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Recipe;
