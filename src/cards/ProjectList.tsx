import React from 'react';
import './projectList.css';

import Project from "./Project";

function ProjectList() {
    let projects = [
        {
            imageUrl: "https://c.pxhere.com/images/6c/4b/c5c14f60fac42fe6354420cfdea8-1458949.jpg!d",
            projectTitle: "Personal Blog",
            projectDetails: "A blog covering all my past and current projects",
            moreDetails: "",
            status: ["Running", "MAINTAINED"],
            siteURL: "https://blog.ymougenel.com/"
        },
        {
            imageUrl: "./projects/histoire_de_rues.png",
            projectTitle: "Histoire de rues",
            projectDetails: "Un site web  présentant une vision cartographique de l'histoire de Paris, en collaboration avec le youtubeur/historien Sur le champ",
            moreDetails: "",
            siteURL: "https://streets-highlight.netlify.app/",
            status: ["Running, MAINTAINED"],
        },
        {
            imageUrl: "https://www.naowak.fr/articles/kavu-poc/preview.png",
            projectTitle: "Kavu Déchet",
            projectDetails: "An environnemental  project, see article https://www.naowak.fr/article/kavu-poc",
            moreDetails: "See article",
            learnMoreLink: "https://www.naowak.fr/article/kavu-poc",
            siteURL: "https://streets-highlight.netlify.app/",
            status: "[Unkown]"
        },
        {
            imageUrl: "https://materializecss.com/images/sample-1.jpg",
            projectTitle: "Enseignement SNT/NSI",
            projectDetails: "A simple web site containing most of my teacher courses. Covers high school computer lessons",
            siteURL: "http://nsi.ymougenel.com/",
            status: "[Running, NOT_MAINTAINED]"
        },

        // {
        //     imageUrl: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        //     projectTitle: "Un autre projet",
        //     projectDetails: "TODO  project",
        //     status: "[TODO]"
        // },
    ]

    return (
        <div id="projects-container">
            {projects.map((item) => (
                <Project projectTitle={item.projectTitle} imageUrl={item.imageUrl}
                         projectDetails={item.projectDetails} moreDetails={item.moreDetails} siteUrl={item.siteURL} learnMoreLink={item.learnMoreLink}/>

            ))}

        </div>
    );
}

export default ProjectList;
