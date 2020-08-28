import React from 'react';

import classNames from 'classnames';

import { default as ItemList } from './ItemList';
import { default as Item } from './Item';
import style from './style.module.scss';

// TODO: Image size consistency
const projects = [ 
    {
        "name" : "Openvpn-ec2",
        "summary" : "CLI application to deploy configured OpenVPN server on cloud. Currently supports AWS EC2 on any regions. OpenVPN certifiacte is generated and can be downloaded through the app.",
        "descriptions" : [
            "Developed with Golang urfave/cli framework along with AWS SDK",            
            "Supports cross platform (Mac/Linux)",
            "Requires a personal AWS account"
        ],
        "img" : 'screenshots/openvpn-ec2.png',
        "progress" : "June 2020 - Ongoing",
        "tech_stack" : [ "golang", "aws" ],
        "link" : "",
        "repository" : "https://github.com/wesgur/openvpn-ec2",
        "sandbox" : "",
    },
    {
        "name" : "Homepage",
        "summary" : "Personal website deployed on Gitub Pages.",
        "descriptions" : [
            "",            
        ],
        "img" : "",
        "progress" : "April 2020 - Ongoing",
        "tech_stack" : [ "react", "js", "html", "scss", "css", "github", "docker" ],
        "link" : "/project",
        "repository" : "https://github.com/wesgur/wesgur.github.io",
    },
    {
        "name" : "Perfect Pitch",
        "summary" : "Personal website",
        "descriptions" : [
            "React",
            "Deployed on Heroku"
        ],
        "img" : "screenshots/perfect-pitch.png",
        "progress" : "Jan 2020 - May 2020",
        "tech_stack" : [ "react", "html", "css", "js", "nodejs", "mongo", "heroku", "github", "docker" ],
        "link" : "https://perfect-pitch-web.herokuapp.com/",
        "repository" : "https://github.com/dcsil/perfect-pitch",
    },
    {
        "name" : "Cancer Care Ontario E-Health Application",
        "summary" : "Web application",
        "descriptions" : [
            
        ],
        "img" : "screenshots/cancer-care.png",
        "progress" : "Sept 2019 - Dec 2019",
        "tech_stack" : [ "react", "redux", "html", "css", "js", "nodejs", "mongo", "heroku", "travis", "elastic" ],
        "link" : "",
        "repository" : "",
    },
    {
        "name" : "Youtube Music Metadata parser",
        "description" : "Web application",
        "img" : "screenshots/youtube-parser.png",
        "progress" : "Jan 2018 - Discontinued",
        "tech_stack" : [ "python", "flask", "html", "css", "js", "jquery" ],
        "link" : "",
        "repository" : "",
    },
]


const Project = (props) => (
    <div className={classNames(style.container)}>
        <h1> Projects </h1>

        <ItemList> 
            { projects.map((project, i) => {
                return (
                    <Item project={project} key={i}/>
                )
            })}
        </ItemList>
    </div>
);

export default Project;