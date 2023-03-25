import { styled, css, Typography, Avatar, Container, Link } from '@mui/material';

export const StyledContainer = styled(Container)`
  ${(props) =>
    props.id === 'blue-box' &&
    css`
      background-color: #4b6cc1;
      height: 1vh;
      border-radius: 2vh;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledAvatar = styled(Avatar)`
  width: 100%;
  height: 100%;
`;

export const StyledTypography = styled(Typography)`
  color: black;
  text-transform: uppercase;
  font-weight: bold;
`;
