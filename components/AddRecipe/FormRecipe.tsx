import React, { useState } from "react";
import { AddProps } from "../../types/interfaces";
import api from "../../api";
import SelectCategory from "../SelectCategory";

import { Badge, Box, Button, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Text, Textarea } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const FormRecipe = ({ isOpen, onClose }: AddProps) => {
  const [readInputs, setReadInputs] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [quantity, setQuantity] = useState<Number>(0);
  const [ingredientsArr, setIngredientsArr] = useState<any>([]);
  // const [sendForm, setSendForm] = useState<any>([]);

  const handleRead = (e: any) => {
    if (e.target.id === "ingredients" || e.target.id === "cantidad") return;
    setReadInputs({
      ...readInputs,
      [e.target.id]: e.target.value,
    });
  };
  const handleIngredient = () => {
    setIngredientsArr([{ quantity, ingrediente: ingredients }]);
    setReadInputs({ ...readInputs, ingredientsArr });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ingredientsArr);
    console.log(readInputs);

    // api.upload(readInputs);
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
                  <Input color="gray.600" fontSize={".9rem"} type="text" name="title" id="title" placeholder="Ensalada de tomate" />
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
                  <FormLabel htmlFor="ingredients">Ingredientes y cantidad</FormLabel>
                  <Stack direction="row">
                    <Input color="gray.600" onChange={(e) => setIngredients(e.target.value)} placeholder="ej: manzana" fontSize={".9rem"} type="text" id="ingredients" />
                    <Box>
                      <NumberInput defaultValue={0} min={0} id="cantidad" onChange={(e) => setQuantity(Number(e))}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Box>
                    <Button variant="outline" onClick={handleIngredient}>
                      <Icon color="brand.primary" as={AiOutlinePlus} />
                    </Button>
                  </Stack>
                  {ingredientsArr &&
                    ingredientsArr.map((ing: any, i: number) => (
                      <Stack key={i} m={2} direction="row" justifyContent={"space-between"}>
                        <Text as="small">{ing.ingrediente}</Text>
                        <Badge colorScheme={"green"} padding={1} minWidth="2rem" textAlign={"center"}>
                          {ing.quantity}
                        </Badge>
                      </Stack>
                    ))}
                </Box>
                <Box>
                  <FormLabel htmlFor="time">Tiempo de preparación</FormLabel>
                  <Input type="text" color="gray.600" placeholder="30min" fontSize={".9rem"} id="time" />
                </Box>
                <Button bg="brand.primary" color="brand.secondary" _hover={{}} type="submit" width="100%" mt={2}>
                  Enviar
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormRecipe;
