import { StyledTypography, StyledLink, StyledContainer, StyledAvatar } from './Header.style'
import Luyz from '../../public/Images/luyz.jpg';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from "@mui/material";

export const Header = () => (
  <header style={{ marginBottom: '10vh' }}>
    <Container>
      {/* Maybe change this to flex container */}
      <Grid container position='relative'>
        <Grid xs={2} md={2}>
          <StyledLink href='/portfolio'>
            <StyledAvatar src={Luyz} alt='Foto do Luyz' />
          </StyledLink>
        </Grid>
        <Grid xs={1} md={1} />
        <Grid xs={9} md={9}>
          <StyledLink href='/portfolio'>
            <StyledTypography variant='h4'>
              Luyz Castelo Branco
            </StyledTypography>
          </StyledLink>
          <Grid container>
            <Grid xs={1} md={1} mt={1}>
              <StyledContainer id='blue-box' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </header>
)
