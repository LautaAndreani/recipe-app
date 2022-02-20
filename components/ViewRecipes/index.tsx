import TableComp from "./TableComp";

import { Badge, Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";

const ViewRecipes = ({ isOpen, onClose, recipe }: any) => {
  const tableContent = recipe.ingredients;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <Box mt={10} padding={5}>
          <Box overflow={"hidden"} borderRadius="md">
            <Image src={recipe.image} alt={recipe.title} objectFit="cover" width={"100%"} height="10rem" transition=".2s all" _hover={{ transform: "scale(1.1)" }} />
          </Box>
          <Text fontWeight={600} mt={3} fontSize="1.2rem">
            {recipe.title}
          </Text>
        </Box>
        <Stack bg="brand.primary" padding={5} lineHeight="1.5" fontSize=".9rem" fontWeight={300} color="white" width="100%" height="100vh">
          <Text>{recipe.description}</Text>
          <Text as="h3" fontSize="1.3rem" fontWeight={500} padding={2}>
            Ingredientes
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
