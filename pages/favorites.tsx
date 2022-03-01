import { Badge, Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout"
import { FirebaseProps } from "../types/interfaces";

interface FavoritesProps {
  favorite : FirebaseProps[]
}

const favorites = ({favorite}: FavoritesProps) => {  
  return (
    <Layout>
      <Center flexWrap={"wrap"}>
        <Text as="h1" color="brand.card" fontWeight={500} fontSize="2rem" w="100%" textAlign={"center"} m={6}>Mis favoritos</Text>
        <Stack mt={4}  alignItems={"center"} spacing={4} >
          {favorite.length === 0 ? <Text color="gray">Ninguna receta añadida</Text> :
          favorite.map((res: FirebaseProps) => 
          <Stack direction="row" key={res.id} bg="brand.cardDark" rounded="md" h="15rem" w="70%" minWidth={"70%"} >
            <Box overflow="hidden" rounded="md"  minW={"20rem"} maxW={"20rem"}>
            <Image src={"https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={res.title} width="100%" height="100%"  rounded={"md"} transition="0.2s all" objectFit={"cover"} _hover={{transform:"scale(1.1)"}}/>
            </Box>
            <Box p={3}>
              <Text color="brand.card" fontSize="1.2rem" mb={2}>{res.title}</Text>
              <Stack direction="row">
                {res.ingredientsArr.map((ing:any, i:number) => <Badge key={i} as="small" variant={"subtle"} bg="#0c4e2c" color="#a0d9be" borderRadius={"full"}>{ing.ingredients.ingrediente}</Badge>)}
              </Stack>
              <Text color="lightgray" fontSize=".8rem" mt={2}>{res.title}</Text>
            <Box mt={4}>
              <Text color="lightgray">{res.description}</Text>
            </Box>
            </Box>
          </Stack>
          )}
        </Stack>
      </Center>
    </Layout>
  )
}

export default favorites