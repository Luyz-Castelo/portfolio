import theme from './Header.theme';
import Luyz from '../../public/Images/luyz.jpg';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Container,
  Link,
  Typography,
  Avatar,
  ThemeProvider,
} from "@mui/material";

export const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <header style={{ marginBottom: '10vh' }}>
        <Container>
          {/* Maybe change this to flex container */}
          <Grid container position='relative'>
            <Grid xs={2} md={2}>
              <Link href='/'>
                <Avatar src={Luyz} alt='Foto do Luyz' />
              </Link>
            </Grid>
            <Grid xs={1} md={1} />
            <Grid xs={9} md={9}>
              <Link href='/'>
                <Typography variant='h4'>
                  Luyz Castelo Branco
                </Typography>
              </Link>
              <Grid container>
                <Grid xs={1} md={1} mt={1}>
                  <Container id='blue-box' />
                </Grid>
              </Grid>

              <Container id='links'>
                <Link href='/projects'>
                  <Typography variant='h6'>
                    Projects
                  </Typography>
                </Link>
                <Link href='/contact'>
                  <Typography variant='h6'>
                    Contact
                  </Typography>
                </Link>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </header>
    </ThemeProvider>
  );
}
