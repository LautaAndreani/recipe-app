import React, { useState } from "react";
import { AddProps } from "../../types/interfaces";
import SelectCategory from "../SelectCategory";

import { Badge, Box, Button, FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Stack, Text, Textarea } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiClock } from "react-icons/hi";
import api from "../../api";
import MotionBoxes from "../../ui/MotionBox";
import { nanoid } from "nanoid";

const FormRecipe = ({ isOpen, onClose }: AddProps) => {
  const [readInputs, setReadInputs] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [ingredientsArr, setIngredientsArr] = useState<any>([]);
  const [confirm, setConfirm] = useState<Boolean>(false);

  const handleRead = (e: any) => {
    if (e.target.id === "ingredients" || e.target.id === "cantidad") return;
    setReadInputs({
      ...readInputs,
      [e.target.id]: e.target.value,
    });
    setConfirm(false);
  };
  const handleIngredient = (e: any) => {
    setIngredients({ ...ingredients, [e.target.name]: e.target.value });
    setConfirm(false);
  };

  const handleAddIngredient = () => {
    setIngredientsArr([...ingredientsArr, { ingredients }]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReadInputs({ ...readInputs, ingredientsArr, id: nanoid() });
    setConfirm(true);
  };
  const handleUpdate = () => {
    console.log(readInputs);
    //Upload Firebase
    api.upload(readInputs);
  };
  return (
    <>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>🍽️ Añade tu receta </ModalHeader>
          <ModalBody>
            <form onChange={handleRead} onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Box>
                  <FormLabel htmlFor="title">Título</FormLabel>
                  <Input isRequired color="gray.600" fontSize={".9rem"} type="text" name="title" id="title" placeholder="Ensalada de tomate" />
                </Box>
                <Box>
                  <FormLabel htmlFor="category">Categoría</FormLabel>
                  <SelectCategory id="category" />
                </Box>
                <Box>
                  <FormLabel htmlFor="description">Descripción del plato</FormLabel>
                  <Textarea color="gray.600" fontSize={".9rem"} id="description" size="lg" placeholder="Muy rico y saludable para acompañar en cualquier momento del día" />
                </Box>
                <Box>
                  <FormControl onChange={handleIngredient}>
                    <FormLabel htmlFor="ingredients">Ingredientes y cantidad</FormLabel>
                    <Stack direction="row">
                      <Input color="gray.600" placeholder="ej: manzana" fontSize={".9rem"} type="text" id="ingredients" name="ingrediente" />
                      <Box>
                        <Input type="number" min={0} id="cantidad" name="cantidad" placeholder="1" />
                      </Box>
                      <Button variant="outline" onClick={handleAddIngredient}>
                        <Icon color="brand.primary" as={AiOutlinePlus} />
                      </Button>
                    </Stack>
                  </FormControl>
                  {ingredientsArr.length >= 1 &&
                    ingredientsArr.map((ing: any, i: number) => (
                      <MotionBoxes key={i}>
                        <Stack m={2} direction="row" justifyContent={"space-between"}>
                          <Text as="small">{ing.ingredients.ingrediente}</Text>
                          <Badge colorScheme={"green"} padding={1} minWidth="2rem" textAlign={"center"} borderRadius="md">
                            {ing.ingredients.cantidad}
                          </Badge>
                        </Stack>
                      </MotionBoxes>
                    ))}
                </Box>
                <Box>
                  <FormLabel htmlFor="time">Tiempo de preparación</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <Icon as={HiClock} color="brand.primary" />
                    </InputLeftElement>
                    <Input isRequired type="text" color="gray.600" placeholder="30min" fontSize={".9rem"} id="time" />
                  </InputGroup>
                </Box>
                <Button bg="brand.primary" color="brand.secondary" _hover={{}} type="submit" width="100%" mt={2}>
                  Enviar
                </Button>
                {confirm && (
                  <MotionBoxes>
                    <Stack>
                      {" "}
                      <Text>¿Confirmar envío?</Text>
                      <Stack direction="row" w="100%">
                        <Button variant="ghost" width="50%" colorScheme="gray" onClick={() => setConfirm(false)}>
                          Revisar campos
                        </Button>
                        <Button autoFocus variant="solid" bg="brand.primary" color="white" _hover={{ bg: "#377B69" }} width="50%" onClick={handleUpdate}>
                          Si
                        </Button>
                      </Stack>
                    </Stack>
                  </MotionBoxes>
                )}
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormRecipe;
