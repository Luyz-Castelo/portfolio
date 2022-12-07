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
          props: { id: 'project' },
          style: {
            borderTop: '5px solid #dddddd',
            padding: '6vh 0 !important',
            borderBottom: '5px solid #dddddd',
          }
        },
        {
          props: { id: 'projectTitle' },
          style: {
            marginBottom: '2vh' 
          }
        },
      ]
    }
  }
});

export default responsiveFontSizes(theme);
