import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Rubik'
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
