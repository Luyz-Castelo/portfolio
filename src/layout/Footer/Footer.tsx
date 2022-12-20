import { Typography } from '@mui/material';
import { StyledContainer, StyledLink } from './Footer.style';

export const Footer = () => {
  return (
    <footer style={{ marginTop: '10vh', borderTop: '1vh solid #e5e5e5', paddingTop: '2vh' }}>
      <StyledContainer>
        <Typography variant='body1'>
          © 2022 Luyz Castelo Branco
        </Typography>
        <Typography variant='body1'>
          Built with <StyledLink href='https://reactjs.org/'>React</StyledLink> and <StyledLink href='https://material-ui.com/'>Material-Ui</StyledLink>
        </Typography>
      </StyledContainer>
    </footer>
  );
}
