import { StyledContainer, StyledLink } from './Error.style'
import { Typography } from "@mui/material";


export const Error = () => {
  return (
    <StyledContainer>
      <Typography variant='h1'>
        404
      </Typography>
      <Typography variant='h3'>
        Oops! this page does not exist.
      </Typography>
      <Typography variant='h4'>
        Go back to the <StyledLink href='/portfolio'> HomePage</StyledLink>
      </Typography>
    </StyledContainer>
  );
}
