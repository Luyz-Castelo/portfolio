import theme from './App.theme';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Header } from './components/Header/Header';
import { IntroductionText } from './components/IntroductionText/IntroductionText';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <CssBaseline />
        <Header />
        <IntroductionText />
      </Container>
    </ThemeProvider>
  );
}
