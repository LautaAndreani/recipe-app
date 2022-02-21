import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "brand.bgDark",
        fontFamily: "poppins",
      },
    },
  },
  colors: {
    brand: {
      text: "#454545",
      primary: "#367564",
      secondary: "#DDFDF3",
      bg: "#EDEDED",
      nav: "#F8F8F8",
      border: "#626262",
      card: "#E5E5E5",
      //Darkmode
      bgDark: "#222526",
      textDark: "#d2cec8",
      navDark: "#1c1e1f",
      icoColor: "#d2cec8",
      cardDark: "#272a2c",
      drawerBg: "#181a1b",
    },
  },
});

export default theme;
