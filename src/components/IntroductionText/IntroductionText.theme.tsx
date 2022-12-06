import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  typography: {
    body1: {
      marginTop: '3vh',
    },
    body2: {
      marginTop: '4vh',
    },
  },
  components: {
    MuiContainer: {
      variants: [
        {
          props: { id: 'main' },
          style: {
            backgroundColor: '#f1f8fa',
            padding: '5vh 5vw',
          }
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#4b6cc1',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline'
          },
        },
      },
    },
  }
});

export default responsiveFontSizes(theme);
