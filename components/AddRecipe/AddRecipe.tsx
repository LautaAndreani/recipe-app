import { Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { CgBowl } from "react-icons/cg";
import { BooleanProps } from "../../types/interfaces";
import FormRecipe from "./FormRecipe";

const AddRecipe = ({ setIsUpdate, isUpdate }: BooleanProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState<Boolean>(false);
  const handleClick = () => {
    onOpen();
    setForm(true);
  };
  return (
    <>
      <Button as="span" leftIcon={<CgBowl />} onClick={handleClick} cursor="pointer" fontWeight={600} _hover={{ bg: "#377B69" }} width="15rem" bottom="20px" position="absolute" left="0" right="0" marginLeft="auto" marginRight="auto" bg="brand.primary" color="white" padding={8}>
        Publicar mi receta
      </Button>
      {form && <FormRecipe isOpen={isOpen} onClose={onClose} setIsUpdate={setIsUpdate} isUpdate={isUpdate} />}
    </>
  );
};

export default AddRecipe;
