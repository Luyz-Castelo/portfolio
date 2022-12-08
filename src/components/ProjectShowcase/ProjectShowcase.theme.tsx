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
        {
          props: { id: 'projectList' },
          style: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            gridGap: '4vmin 2vmin'
          }
        }
      ]
    },
  }
});

export default responsiveFontSizes(theme);
