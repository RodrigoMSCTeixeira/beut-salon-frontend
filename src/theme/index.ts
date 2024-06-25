import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  size: {
    container: {
      sm: "600px",
      md: "800px",
      lg: "1200px",
      xl: "1400px",
    },
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

export default theme;
