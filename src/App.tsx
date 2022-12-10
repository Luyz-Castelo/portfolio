import theme from './App.theme';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { IntroductionText } from './components/IntroductionText/IntroductionText';
import { ProjectShowcase } from './components/ProjectShowcase/ProjectShowcase';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <CssBaseline />
        <Header />
        <IntroductionText />
        <ProjectShowcase />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
