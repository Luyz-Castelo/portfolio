import { styled, css, Container, Card, Link, Divider } from '@mui/material'

export const StyledContainer = styled(Container)`
  padding: 0 !important;

  ${props => props.id === 'title' && css`
    padding: 6vh 0 !important;
  `}

  ${props => props.id === 'projectTitle' && css`
    display: flex;
    justify-content: space-between;
  `}
`

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  :not(:last-child) {
    margin-bottom: 4vh;
  }
`

export const StyledDivider = styled(Divider)`
  border-bottom-width: medium;
  margin-bottom: 1vh
`

export const StyledLink = styled(Link)`
  padding-bottom: .5rem;
`
