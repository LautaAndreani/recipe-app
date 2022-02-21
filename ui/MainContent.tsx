import { Grid, Stack } from "@chakra-ui/react";
import Recipe from "../components/Recipes";
import { MainProps } from "../types/interfaces";
interface Props {
  data: MainProps[];
  setRecipe: any;
  onOpen: any;
}

const MainContent = ({ data, setRecipe, onOpen }: Props) => {
  return (
    <>
      <Stack justifyContent="center" width="100%" alignItems={"center"} direction="row" flexWrap="wrap" mt={7}>
        <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(270px, 1fr))">
          {data.map((res) => (
            <Recipe res={res} key={res.id} setRecipe={setRecipe} onOpen={onOpen} />
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default MainContent;
