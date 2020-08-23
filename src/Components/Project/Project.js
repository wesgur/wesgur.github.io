import React from 'react';

import classNames from 'classnames';

import { default as ItemList } from './ItemList';
import { default as Item } from './Item';
import style from './style.module.scss';

const projects = [ 
    {
        "name" : "Openvpn-ec2",
        "description" : "Setup tool to deploy vpn on EC2",
        "img" : "",
        "progress" : "June 2020 - Ongoing",
        "tech_stack" : [ "golang", "aws" ],
        "link" : "",
        "repository" : "",
    },
    {
        "name" : "Homepage",
        "description" : "",
        "img" : "",
        "progress" : "April 2020 - Ongoing",
        "tech_stack" : [ "react", "js", "html", "scss", "css", "github" ],
        "link" : "",
        "repository" : "",
    },
    {
        "name" : "Perfect Pitch",
        "description" : "",
        "img" : "",
        "progress" : "Jan 2020 - May 2020",
        "tech_stack" : [ "react", "html", "css", "js", "nodejs", "mongo", "heroku", "github" ],
        "link" : "",
        "repository" : "",
    },
    {
        "name" : "Cancer Care Ontario E-Health Application",
        "description" : "",
        "img" : "",
        "progress" : "Sept 2019 - Dec 2019",
        "tech_stack" : [ "react", "redux", "html", "css", "js", "nodejs", "mongo", "heroku", "travis", "elastic" ],
        "link" : "",
        "repository" : "",
    },
    {
        "name" : "Youtube Music Metadata parser",
        "description" : "",
        "img" : "",
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