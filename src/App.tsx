import theme from './App.theme';
import { Container, ThemeProvider } from '@mui/material';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { router } from './helpers/router/router'
import { RouterProvider } from "react-router-dom";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md' sx={{ padding: '4vh 4vw' }}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
