import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 !important',
        }
      },
      variants: [
        {
          props: { id: 'title' },
          style: {
            padding: '6vh 0 !important',
          }
        },
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          ':not(:last-child)': {
            marginBottom: '4vh'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: 'medium',
          marginBottom: '1vh',
        }
      }
    },
  }
});

export default responsiveFontSizes(theme);
