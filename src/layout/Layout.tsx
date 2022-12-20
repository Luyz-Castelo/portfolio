import { Container } from "@mui/material"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Route } from "../pages/Route"

export const Layout = () => {
  return (
    <Container maxWidth='md' sx={{ padding: '4vh 4vw' }}>
      <Header />
      <Route />
      <Footer />
    </Container>
  )
}
