import type { AppProps } from "next/app";
import theme from "../theme";
import { useState } from "react";
import { FirebaseProps } from "../types/interfaces";

import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const [favorite, setFavorite] = useState<FirebaseProps[]>([])

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} setFavorite={setFavorite} favorite={favorite} />
    </ChakraProvider>
  );
}

export default MyApp;
