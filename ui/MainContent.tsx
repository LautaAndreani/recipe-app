import { Grid, Stack, Text } from "@chakra-ui/react";
import Recipe from "../components/Recipes";
import { MainProps } from "../types/interfaces";

interface Props {
  data: MainProps[];
  reload: MainProps[];
  setRecipe: any;
  onOpen: any;
}

const MainContent = ({ reload, data, setRecipe, onOpen }: Props) => {
  return (
    <>
      {!reload ||
        (data.length <= 0 && (
          <Text fontSize=".8rem" color="lightgray" textAlign={"center"} mt={5}>
            No hay recetas, agrega una
          </Text>
        ))}
      <Stack justifyContent="center" width="100%" alignItems={"center"} direction="row" flexWrap="wrap" mt={7}>
        <Grid gridGap={6} padding="0 1rem" templateColumns="repeat(auto-fill, minmax(270px, 1fr))">
          {!reload ? data.map((res) => <Recipe res={res} key={res.id} setRecipe={setRecipe} onOpen={onOpen} />) : reload.map((res) => <Recipe res={res} key={res.id} setRecipe={setRecipe} onOpen={onOpen} />)}
        </Grid>
      </Stack>
    </>
  );
};

export default MainContent;
