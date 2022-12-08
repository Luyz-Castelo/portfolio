import { Container, Typography, ThemeProvider, Link } from '@mui/material'
import theme from './IntroductionText.theme'

export const IntroductionText = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container id='main'>
        <Typography variant='h2'>👋 Hello, I'm Luyz.</Typography>
        <Typography variant='body1'>
          I'm a junior developer from Brazil. Currently open for opportunities. In my spare time i enjoy building new projects, gaming. My preferred tools are C#, nodejs and React.
        </Typography>
        <Typography variant='body2'>
          I'm on <Link href='https://github.com/Luyz-Castelo'>Github</Link> and <Link href='https://www.linkedin.com/in/luyz-castelo-branco-1412a3205/'>Linkedin</Link>.
        </Typography>
      </Container>
    </ThemeProvider>
  )
}
