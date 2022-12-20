import { styled, css, Typography, Container, Link } from '@mui/material';

export const StyledTypography = styled(Typography)`
  ${props => props.variant === 'body1' && css`
    margin-top: 3vh;
  `}

  ${props => props.variant === 'body2' && css`
    margin-top: 4vh;
  `}
`

export const StyledContainer = styled(Container)`
  background-color: #f1f8fa;
  padding: 5vh 5vw;
  margin-bottom: 4vh;
`

export const StyledLink = styled(Link)`
  color: #4b6cc1;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
