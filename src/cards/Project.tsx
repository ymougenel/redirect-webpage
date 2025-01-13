import React from 'react';
import './project.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import {CardActions, CardMedia, createTheme, styled, ThemeProvider, Typography} from "@mui/material";

function Project({projectTitle, imageUrl, projectDetails, moreDetails, status, siteUrl, githubURL, learnMoreLink}: { //TODO define righ props types
    projectTitle: any,
    imageUrl: any,
    projectDetails: any,
    moreDetails: any,
    status: any,
    siteUrl: any
    learnMoreLink: any,
    githubURL: any,

}) {
    // Custom Card with hover transition
    const StyledCard = styled(Card)(({ theme }) => ({
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    }));
    const card_theme = createTheme({
        typography: {
            body1: {
                fontSize: '1.08em',
            }
        },
    });

    return (
            <StyledCard className="card">
                <div className="ribbon">{status[0]}</div>
                <CardMedia className="card-media"
                    image={imageUrl}
                    title="green iguana"
                />
                <CardContent className="card-content">
                    <ThemeProvider theme={card_theme}>
                        <Typography gutterBottom variant="h4" component="div">
                            {projectTitle}
                        </Typography>
                        <Typography className="project-details" variant="body1" color="text.secondary">
                            {projectDetails}
                        </Typography>
                        {/*<p>{status}</p>*/}
                    </ThemeProvider>
                </CardContent>
                <CardActions className="card-bottom">
                    {siteUrl ? (
                        <Button size="medium" href={siteUrl}>See Website</Button>
                    ) : (<p></p>)}
                    {moreDetails ? (
                        <Button size="medium" href={learnMoreLink}>{moreDetails}</Button>
                    ) : (<p></p>)}
                    {githubURL !== "NONE" ? (
                        // <div style={{display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
                            <a href={githubURL}>
                                <img style={{height: "30px"}} alt="github_URL"
                                     src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"/>
                            </a>
                        // </div>
                    ) : (<p></p>)}
                </CardActions>
            </StyledCard>
    );
}

export default Project;
