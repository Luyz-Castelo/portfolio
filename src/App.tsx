import theme from './App.theme';
import { ThemeProvider } from '@mui/material';
import { Layout } from './layout/Layout';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Layout />
  </ThemeProvider>
);
