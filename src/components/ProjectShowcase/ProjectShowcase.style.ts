import { styled, css, Container, Card, Divider } from '@mui/material'

export const StyledContainer = styled(Container)`
  padding: 0 !important;

  ${props => props.id === 'title' && css`
    padding: 6vh 0 !important;
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
