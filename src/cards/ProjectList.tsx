import React from 'react';
import logo from '../logo.svg';
import './project.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import {CardActions, CardMedia, Typography} from "@mui/material";
import Project from "./Project";

function ProjectList() {
    let projects = [{
        index: 0,
        imageUrl: "https://materializecss.com/images/sample-1.jpg",
        projectTitle: "Enseignement SNT/NSI",
        projectDetails: "A simple web site containing most of my teacher courses. Covers high school computer lessons",
    }]

    return (
        <Project person={{name: 'Lin Lanying', imageId: '1bX5QH6'}}
                 size={100} projectTitle={"Enseignement SNT/NSI"}/>
    );
}

export default ProjectList;
