import TableComp from "./TableComp";

import { Badge, Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import {MdOutlineFavoriteBorder, MdFavorite} from "react-icons/md"

const ViewRecipes = ({ isOpen, onClose, recipe, favoriteRecipe }: any) => {
  const tableContent = recipe.ingredientsArr;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent bg="brand.navDark" color="brand.card">
        <HStack alignItems={"center"}>
          <Icon cursor="pointer" as={MdOutlineFavoriteBorder} m={4} fontSize="1.5rem" onClick={() => favoriteRecipe(recipe)}/>
          <DrawerCloseButton />
        </HStack>
        <Box mt={10} padding={5}>
          <Box overflow={"hidden"} borderRadius="md">
            <Image src={"https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={recipe.title} objectFit="cover" width={"100%"} height="10rem" transition=".2s all" _hover={{ transform: "scale(1.1)" }} />
          </Box>
          <Text fontWeight={600} mt={3} fontSize="1.2rem">
            {recipe.title}
            <Badge as="span" ml={2} colorScheme="whiteAlpha">
              {recipe.category}
            </Badge>
          </Text>
        </Box>
        <Stack bg="brand.primary" padding={5} lineHeight="1.5" fontSize=".9rem" fontWeight={300} color="white" width="100%" height="100vh">
          <Text>{recipe.description}</Text>
          <Text as="h3" fontSize="1.3rem" fontWeight={500} padding={2}>
            Ingredientes 🥣
          </Text>
          <TableComp tableContent={tableContent} />
          <Text as="h3" fontSize="1.3rem" fontWeight={500} padding={2}>
            Preparación{" "}
            <Badge colorScheme={"teal"}>
              <Icon as={AiOutlineClockCircle} paddingTop={0.5} marginRight={0.5} />
              {recipe.time}
            </Badge>
          </Text>
        </Stack>
      </DrawerContent>
    </Drawer>
  );
};

export default ViewRecipes;
