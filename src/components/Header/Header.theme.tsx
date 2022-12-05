import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    allVariants: {
      textTransform: 'uppercase',
    },
    h6: {
      color: '#5e5e5e',
      fontWeight: 'bold',
      ":hover": {
        color: '#4b6cc1',
      },
    },
  },
  components: {
    MuiLink: { styleOverrides: { root: { textDecoration: 'none' } } },
    MuiContainer: {
      variants: [
        {
          props: { id: 'blue-box' },
          style: {
            backgroundColor: '#4b6cc1',
            height: '1vh',
            borderRadius: '2vh'
          }
        },
        {
          props: { id: 'links' },
          style: {
            display: 'flex',
            paddingLeft: '0 !important',
            position: 'absolute',
            gap: '3vw',
            bottom: '0',
          },
        },
      ],
    },
    MuiAvatar: {
      styleOverrides: { root: { width: '100%', height: '100%' } }
    },
  }
});

theme = responsiveFontSizes(theme);

export default theme;
