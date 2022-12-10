import theme from './Footer.theme';
import { Container, Link, ThemeProvider, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <footer style={{ marginTop: '10vh', borderTop: '1vh solid #e5e5e5', paddingTop: '2vh' }}>
        <Container>
          <Typography variant='body1'>
            © 2022 Luyz Castelo Branco
          </Typography>
          <Typography variant='body1'>
            Built with <Link href='https://reactjs.org/'>React</Link> and <Link href='https://material-ui.com/'>Material-Ui</Link>
          </Typography>
        </Container>
      </footer>
    </ThemeProvider>
  );
}
