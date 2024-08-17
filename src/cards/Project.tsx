import React from 'react';
import './projectList.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import {CardActions, CardMedia, Typography} from "@mui/material";

function Project({projectTitle, imageUrl, projectDetails, moreDetails, siteUrl, learnMoreLink}: { //TODO define righ props types
    projectTitle: any,
    imageUrl: any,
    projectDetails: any,
    moreDetails: any,
    siteUrl: any
    learnMoreLink: any
}) {
    // TODO: use global borderTop config (var???)
    return (
        <div>
            <Card sx={{width: 420, boxShadow: "11px 7px 5px 2px black"}}>
                <CardMedia
                    sx={{height: 140}}
                    image={imageUrl}
                    title="green iguana"
                />
                <CardContent style={{borderTop: ' 2px solid rgba(160,160,160,0.2)'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {projectTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {projectDetails}
                    </Typography>
                </CardContent>
                <CardActions style={{borderTop: ' 2px solid rgba(160,160,160,0.2)', marginLeft: "5%" }}>
                    <Button size="small" href={siteUrl}>See Website</Button>
                    {moreDetails ? (
                        <Button size="small" href={learnMoreLink}>{moreDetails}</Button>
                    ) : (<p></p>)}
                </CardActions>
            </Card>
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
