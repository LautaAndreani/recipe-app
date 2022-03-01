import type { AppProps } from "next/app";
import theme from "../theme";
import { useState } from "react";
import { FirebaseProps } from "../types/interfaces";

import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const [favorite, setFavorite] = useState<FirebaseProps[]>([
    {
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus quidem minima deserunt explicabo, commodi non natus! Itaque, impedit rerum?",
      "time": "Quidem et non sint ",
      "category": " 🍵 merienda",
      "ingredientsArr": [
          {
              "ingredients": {
                  "ingrediente": "Corrupti omnis lore",
                  "cantidad": "50"
              }
          },
          {
              "ingredients": {
                  "cantidad": "2",
                  "ingrediente": "asd123"
              }
          }
      ],
      "title": "Officiis est debitis",
      "id": "xnRbeZ6A90JyhSHByzjA0"
  }
  ])

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} setFavorite={setFavorite} favorite={favorite} />
    </ChakraProvider>
  );
}

export default MyApp;
