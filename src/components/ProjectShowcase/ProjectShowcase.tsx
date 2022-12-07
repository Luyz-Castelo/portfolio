import  theme from "./ProjectShowcase.theme";
import { ThemeProvider, Container, Typography, Avatar, Link } from "@mui/material";
import { projects } from "../../helpers/projects";

export const ProjectShowcase = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container id='title'>
        <Typography variant='h4'>
          Personal Projects
        </Typography>
      </Container>
      {projects.map(({ title, description, imageSrc, projectLink }) => (
          <Container id='project'>
            <Container id='projectTitle'>
              <Typography variant='h4'>{title}</Typography>
            </Container>
            <Container id='image'>
              <Link href={projectLink}>
                <Avatar src={imageSrc} alt={description} variant='square' />
              </Link>
            </Container>
          </Container>
        )
      )}
    </ThemeProvider>
  );
};
