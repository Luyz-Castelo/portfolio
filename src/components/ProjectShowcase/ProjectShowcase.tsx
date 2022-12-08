import  theme from "./ProjectShowcase.theme";
import { ThemeProvider, Container, Typography, Link, Card, CardContent, CardMedia } from "@mui/material";
import { projects } from "../../helpers/projects";

export const ProjectShowcase = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container id='title'>
        <Typography variant='h4'>
          Personal Projects
        </Typography>
      </Container>
      <Container id='projectList'>
        {projects.map(({ title, description, imageSrc, imageAlt, projectLink }, index) => {
          return (
            <Container>
              <Card variant='outlined'>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
                <Link href={projectLink} target='blank'>
                  <CardMedia component="img" image='https://via.placeholder.com/300' alt={imageAlt} />
                </Link>
              </Card>
            </Container>
          );
        }
        )}
      </Container>
    </ThemeProvider>
  );
};
