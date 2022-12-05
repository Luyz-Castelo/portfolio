import Luyz from '../../public/Images/luyz.jpg' 
import Grid from '@mui/material/Unstable_Grid2';
import { Container, Link, Typography, Avatar, Box } from "@mui/material";

export const Header = () => {
  return (
    <header>
      <Container maxWidth="md">
        <Grid container mt={2} position='relative'>
          <Grid xs={2} md={2}>
            <Link href='/' color='inherit'>
              <Avatar alt='Foto do Luyz' src={Luyz} sx={{ width: '100%', height: '100%'}} />
            </Link>
          </Grid>
          <Grid xs={1} md={1} />
          <Grid xs={9} md={9}>
            <Typography variant='h4'>
              Luyz Castelo Branco
            </Typography>
            <Grid container>
              <Grid xs={1} md={1} mt={1}>
                <Box sx={{ backgroundColor: '#4b6cc1', height: '1vh', borderRadius: '2vh' }} />
              </Grid>
            </Grid>

            <Container sx={{ display: 'flex', paddingLeft: '0 !important', position: 'absolute', gap: '3vw', bottom: '0' }} >
              <Typography variant='h6' color='#5e5e5e'>
                <Link href='https://github.com/Luyz-Castelo' fontWeight='bold' color='inherit' underline='none' sx={{'&:hover': {color: '#4b6cc1'}}}>
                  Work
                </Link>
              </Typography>
              <Typography variant='h6' color='#5e5e5e'>
                <Link href='https://github.com/Luyz-Castelo' fontWeight='bold' color='inherit' underline='none' sx={{'&:hover': {color: '#4b6cc1'}}}>
                  Projects
                </Link>
              </Typography>
              <Typography variant='h6' color='#5e5e5e'>
                <Link href='https://github.com/Luyz-Castelo' fontWeight='bold' color='inherit' underline='none' sx={{'&:hover': {color: '#4b6cc1'}}}>
                  Articles
                </Link>
              </Typography>
              <Typography variant='h6' color='#5e5e5e'>
                <Link href='https://github.com/Luyz-Castelo' fontWeight='bold' color='inherit' underline='none' sx={{'&:hover': {color: '#4b6cc1'}}}>
                  Contact
                </Link>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
