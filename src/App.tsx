import theme from './App.theme';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
