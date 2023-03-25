import { StyledTypography, StyledContainer, StyledLink } from './IntroductionText.style';
import { Typography } from '@mui/material';

export const IntroductionText = () => {
  return (
    <StyledContainer>
      <Typography variant="h2">👋 Hello, I'm Luyz.</Typography>
      <StyledTypography variant="body1">
        I'm a junior developer from Brazil. Currently open for opportunities. In my spare time i enjoy building new projects, gaming. My
        preferred tools are C#, nodejs and React.
      </StyledTypography>
      <StyledTypography variant="body2">
        I'm on <StyledLink href="https://github.com/Luyz-Castelo">Github</StyledLink> and{' '}
        <StyledLink href="https://www.linkedin.com/in/luyz-castelo-branco-1412a3205/">Linkedin</StyledLink>.
      </StyledTypography>
    </StyledContainer>
  );
};
