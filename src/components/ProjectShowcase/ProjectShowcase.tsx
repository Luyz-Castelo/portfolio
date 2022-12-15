import  theme from "./ProjectShowcase.theme";
import { ThemeProvider, Container, Typography, Link, Card, CardContent, CardMedia, Divider } from "@mui/material";
import { projects } from "../../helpers/projects";

export const ProjectShowcase = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container id='title'>
        <Typography variant='h4'>
          Personal Projects
        </Typography>
      </Container>
      <Container>
        {projects.map(({ title, description, imageSrc, imageAlt, projectLink }, index) => {
          return (
            <Card key={index} variant='outlined'>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <Divider />
              <Link href={projectLink} target='blank'>
                <CardMedia component="img" image={imageSrc} alt={imageAlt} />
              </Link>
            </Card>
          );
        }
        )}
      </Container>
    </ThemeProvider>
  );
};
