import React from 'react';
import './projectList.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import {CardActions, CardMedia, styled, Typography} from "@mui/material";

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
    const StyledCard = styled(Card)(({ theme }) => ({
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    }))
    // TODO: use global borderTop config (var???)
    return (
        <div>
            <StyledCard className="card">
                <CardMedia className="card-media"
                    image={imageUrl}
                    title="green iguana"
                />
                <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div">
                        {projectTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {projectDetails}
                    </Typography>
                    {/*<p>{status}</p>*/}
                </CardContent>
                <CardActions className="card-bottom">
                    <Button size="small" href={siteUrl}>See Website</Button>
                    {/*IF MORE DETAILS TO DEPLAY*/}
                    {moreDetails ? (
                        <Button size="small" href={learnMoreLink}>{moreDetails}</Button>
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
        </div>
        // <div className="Card">
        //     <div className="col s10 m4">
        //         <Card sx={{maxWidth: 345}}>
        //             <CardMedia
        //                   sx={{ height: 140 }}
        //                   image={imageUrl}
        //                   title="green iguana"
        //               />
        //               <CardContent>
        //                   <Typography gutterBottom variant="h5" component="div">
        //                   </Typography>
        //                   <Typography variant="body2" color="text.secondary">
        //                       {projectDetails}
        //                   </Typography>
        //               </CardContent>
        //               <CardActions>
        //                   <Button size="small">Share</Button>
        //                   <Button size="small">Learn More</Button>
        //               </CardActions>
        //           </Card>
        //           <hr />
        //           <Button variant="contained" color="primary">
        //               Contained Button
        //           </Button>
        //
        //           <Button variant="outlined" color="primary">
        //               Outlined Button
        //           </Button>
        //       </div>
        //   </div>
    );
}

export default Project;
