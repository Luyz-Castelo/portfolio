import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'sans-serif !important'
    },
  },
});

export default responsiveFontSizes(theme);
