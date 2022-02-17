import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "brand.bg",
        fontFamily: "poppins",
      },
    },
  },
  colors: {
    brand: {
      text: "#454545",
      primary: "#43927D",
      secondary: "#DDFDF3",
      bg: "#EDEDED",
      nav: "#F8F8F8",
      border: "#626262",
      card: "#E5E5E5",
    },
  },
});

export default theme;
