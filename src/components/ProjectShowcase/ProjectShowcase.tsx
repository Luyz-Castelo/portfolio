import { StyledContainer, StyledCard, StyledDivider, StyledLink } from './ProjectShowcase.style';
import { Typography, Link, CardContent, CardMedia } from '@mui/material';
import { projects } from '../../helpers/projects';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ProjectShowcase = () => {
  return (
    <>
      <StyledContainer id="title">
        <Typography variant="h4">Personal Projects</Typography>
      </StyledContainer>
      <StyledContainer>
        {projects.map(({ title, description, imageSrc, imageAlt, projectLink, projectLinkInGithub }, index) => {
          return (
            <StyledCard key={index} variant="outlined">
              <CardContent>
                <StyledContainer id="projectTitle">
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="caption">
                    <Link href={projectLinkInGithub} target="blank" color="inherit">
                      <GitHubIcon />
                    </Link>
                  </Typography>
                </StyledContainer>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <StyledDivider />
              <StyledLink href={projectLink} target="blank">
                <CardMedia component="img" image={imageSrc} alt={imageAlt} />
              </StyledLink>
            </StyledCard>
          );
        })}
      </StyledContainer>
    </>
  );
};
