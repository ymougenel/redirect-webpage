import React from 'react';
import logo from '../logo.svg';
import './projectList.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import {CardActions, CardMedia, Typography} from "@mui/material";

function Project({ projectTitle, imageUrl, projectDetails }: {projectTitle: any,imageUrl:any, projectDetails: any}) {
    let index = 0;
    // let imageUrl= "https://materializecss.com/images/sample-1.jpg";
    // let projectTitle = "Enseignement SNT/NSI";
    // let projectDetails = "A simple web site containing most of my teacher courses. Covers high school computer lessons";
  return (
      <div>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
              sx={{ height: 140 }}
              image={imageUrl}
              title="green iguana"
          />
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  {projectTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  {projectDetails}
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
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
