import React from 'react';
import './projectList.css';

import Project from "./Project";

function ProjectList() {
    let projects = [{
        imageUrl: "https://c.pxhere.com/images/6c/4b/c5c14f60fac42fe6354420cfdea8-1458949.jpg!d",
        projectTitle: "Personal Blog",
        projectDetails: "A blog covering all my past and current projects",
    },
        {
            imageUrl: "https://materializecss.com/images/sample-1.jpg",
            projectTitle: "Enseignement SNT/NSI",
            projectDetails: "A simple web site containing most of my teacher courses. Covers high school computer lessons",
        },
    ]

    return (
        <div id="projects-container">
            {projects.map((item) => (
                <Project projectTitle={item.projectTitle} imageUrl={item.imageUrl}
                         projectDetails={item.projectDetails}/>

            ))}

        </div>
    );
}

export default ProjectList;
