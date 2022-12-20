import { StyledContainer, StyledCard, StyledDivider } from './ProjectShowcase.style'
import { Typography, Link, CardContent, CardMedia } from "@mui/material";
import { projects } from "../../helpers/projects";

export const ProjectShowcase = () => {
  return (
    <>
      <StyledContainer id='title'>
        <Typography variant='h4'>
          Personal Projects
        </Typography>
      </StyledContainer>
      <StyledContainer>
        {projects.map(({ title, description, imageSrc, imageAlt, projectLink }, index) => {
          return (
            <StyledCard key={index} variant='outlined'>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <StyledDivider />
              <Link href={projectLink} target='blank'>
                <CardMedia component="img" image={imageSrc} alt={imageAlt} />
              </Link>
            </StyledCard>
          );
        }
        )}
      </StyledContainer>
    </>
  );
};
