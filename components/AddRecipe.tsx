import {  Button } from "@chakra-ui/react"
import {CgBowl} from "react-icons/cg"

const AddRecipe = ({onOpen}:any) => {
  return (
    <>
    <Button onClick={onOpen} cursor="pointer" fontWeight={600} _hover={{bg:"gray"}} width="15rem" bottom="20px" position="absolute" left="0" right="0" marginLeft="auto" marginRight="auto" bg="brand.primary" color="white" padding={8} as="span" leftIcon={<CgBowl/>}>   
        Publicar mi receta
    </Button> 
    </>
      
      
  )
}

export default AddRecipe