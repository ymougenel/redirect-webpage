import React from 'react';
import logo from '../logo.svg';
import './project.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import {CardActions, CardMedia, Typography} from "@mui/material";
import Project from "./Project";

function ProjectList() {
    let index = 0;
    let imageUrl= "https://materializecss.com/images/sample-1.jpg";
    let projectTitle = "Enseignement SNT/NSI";
    let projectDetails = "A simple web site containing most of my teacher courses. Covers high school computer lessons";
  return (
      <Project />
  );
}

export default Project;
