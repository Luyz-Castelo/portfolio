import { Container, Link, styled } from "@mui/material"

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline
  }
`
