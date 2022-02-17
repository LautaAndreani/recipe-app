import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Image, Stack, Text } from "@chakra-ui/react";
import TableComp from "./TableComp";

const ViewRecipes = ({isOpen, onClose, recipe}:any) => {
  const tableContent = recipe.ingredients
  console.log(tableContent);
  
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="sm">
     <DrawerContent>
     <DrawerCloseButton/>
     <Box mt={10} padding={5}>
      <Image src={recipe.image} objectFit="cover" width={"100%"} height="10rem" borderRadius="md"/>
      <Text fontWeight={600} mt={3} fontSize="1.2rem">{recipe.title} </Text>  
     </Box>
     <Stack bg="brand.primary" padding={5} lineHeight="1.5" fontSize=".9rem" fontWeight={300} color="white" width="100%" height="100vh">
       <Text>{recipe.description}</Text>
       <Text as="h3" fontSize="1.3rem">Ingredientes</Text>
       <TableComp tableContent={tableContent} />
     </Stack>
    </DrawerContent>
    </Drawer>
  )
}

export default ViewRecipes;