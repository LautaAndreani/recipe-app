import React, { useRef, useState } from "react";
import { AddProps } from "../../types/interfaces";
import SelectCategory from "../SelectCategory";

import { Badge, Box, Button, FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Stack, Text, Textarea } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiClock } from "react-icons/hi";
import api from "../../api";
import MotionBoxes from "../../ui/MotionBox";
import { nanoid } from "nanoid";

const FormRecipe = ({ isOpen, onClose, setIsUpdate, isUpdate }: AddProps) => {
  const [readInputs, setReadInputs] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [ingredientsArr, setIngredientsArr] = useState<any>([]);
  const [confirm, setConfirm] = useState<Boolean>(false);
  const inputRef = useRef<any>(null);

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
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReadInputs({ ...readInputs, ingredientsArr, id: nanoid() });
    setConfirm(true);
  };

  const handleUpdate = () => {
    //Upload Firebase
    api.upload(readInputs);
    onClose();
    setIsUpdate(!isUpdate);
  };

  return (
    <>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent bg="brand.bgDark" color="brand.card">
          <ModalHeader>🍽️ Añade tu receta </ModalHeader>
          <ModalBody>
            <form onChange={handleRead} onSubmit={handleSubmit}>
              <Stack spacing={3} _placeholder={{ color: "gray" }}>
                <Box>
                  <FormLabel htmlFor="title" fontWeight={400}>
                    Título
                  </FormLabel>
                  <Input borderColor="gray" isRequired color="lightgray" fontSize={".9rem"} type="text" name="title" id="title" placeholder="Ensalada de tomate" _placeholder={{ color: "gray" }} />
                </Box>
                <Box>
                  <FormLabel htmlFor="category" fontWeight={400}>
                    Categoría
                  </FormLabel>
                  <SelectCategory id="category" isRequired />
                </Box>
                <Box>
                  <FormLabel htmlFor="description" fontWeight={400}>
                    Descripción del plato
                  </FormLabel>
                  <Textarea color="lightgray" fontSize={".9rem"} id="description" size="lg" placeholder="Muy rico y saludable para acompañar en cualquier momento del día" _placeholder={{ color: "gray" }} borderColor="gray" />
                </Box>
                <Box>
                  <FormControl onChange={handleIngredient}>
                    <FormLabel htmlFor="ingredients" fontWeight={400}>
                      Ingredientes y cantidad
                    </FormLabel>
                    <Stack direction="row" color="lightgray">
                      <Input color="lightgray" borderColor="gray" placeholder="ej: manzana" _placeholder={{ color: "gray" }} fontSize={".9rem"} type="text" id="ingredients" name="ingrediente" ref={inputRef} />
                      <Box>
                        <Input type="number" borderColor="gray" min={0} id="cantidad" name="cantidad" placeholder="1" _placeholder={{ color: "gray" }} />
                      </Box>
                      <Button variant="outline" borderColor="gray" _hover={{}} onClick={handleAddIngredient}>
                        <Icon color="green.100" as={AiOutlinePlus} />
                      </Button>
                    </Stack>
                  </FormControl>
                  {ingredientsArr.length >= 1 &&
                    ingredientsArr.map((ing: any, i: number) => (
                      <MotionBoxes key={i}>
                        <Stack mt={4} direction="row" justifyContent={"space-between"}>
                          <Text as="small">{ing.ingredients.ingrediente}</Text>
                          <Badge colorScheme={"green"} padding={1} minWidth="2rem" textAlign={"center"} borderRadius="md">
                            {ing.ingredients.cantidad}
                          </Badge>
                        </Stack>
                      </MotionBoxes>
                    ))}
                </Box>
                <Box>
                  <FormLabel htmlFor="time" fontWeight={400}>
                    Tiempo de preparación
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <Icon as={HiClock} color="green.100" />
                    </InputLeftElement>
                    <Input isRequired type="text" color="lightgray" placeholder="30min" _placeholder={{ color: "gray" }} fontSize={".9rem"} id="time" borderColor="gray" />
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
