import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

import logo from './assets/openvpn-ec2.png';

import { ReactComponent as IconAws } from './icons/aws.svg';
import { ReactComponent as IconCss } from './icons/css.svg';
import { ReactComponent as IconFlask } from './icons/flask.svg';
import { ReactComponent as IconGithub } from './icons/github.svg';
import { ReactComponent as IconGolang } from './icons/golang.svg';
import { ReactComponent as IconHeroku } from './icons/heroku.svg';
import { ReactComponent as IconHtml } from './icons/html.svg';
import { ReactComponent as IconNodejs } from './icons/nodejs.svg';
import { ReactComponent as IconPython } from './icons/python.svg';
import { ReactComponent as IconReact } from './icons/react.svg';
import { ReactComponent as IconJs } from './icons/js.svg';
import { ReactComponent as IconJquery } from './icons/jquery.svg';
import { ReactComponent as IconTerraform } from './icons/terraform.svg';
import { ReactComponent as IconElastic } from './icons/elastic.svg';
import { ReactComponent as IconMongo } from './icons/mongo.svg';
import { ReactComponent as IconTravis } from './icons/travis.svg';

const Item = (props) => (
    <li className={classNames(styles.item)}>
        <div className={classNames(styles.left, styles.content)}>
            <div className={classNames(styles.left)}>
                <ProjectName name={props.project.name} />            
                <ProjectDescription description={props.project.description} />            
                <ProjectTechStack tech_stack={props.project.tech_stack} />
            </div>
            <div className={classNames(styles.right, styles['timeline-content'])}>
                <ProjectProgress progress={props.project.progress} />
            </div>
        </div>            
        <div className={classNames(styles.right, styles['image-content'])}>
            <ProjectImage />
        </div>        
    </li>
);

const ProjectName = (props) => (
    <h2> {props.name} </h2>
);

const ProjectDescription = (props) => (
    <h3> {props.description} </h3>
);

const ProjectProgress = (props) => (
    <h2> {props.progress} </h2>
);

const ProjectImage = (props) => (
    <img src={logo} alt={"logo"}/>
);

const ProjectTechStack = (props) => {
    return (
        <div className={classNames(styles['tech-stack'])}>
            <h3> # Technology Stack </h3>
            { props.tech_stack && props.tech_stack.map((tech, i) => {
                return ProjectTechnologyMapper(tech, i);    
            }) }
        </div>        
    );
}

const ProjectTechnologyMapper = (tech, i) => {
    switch(tech){
        case "golang":             
            return <IconGolang key={i}/>            
        case "aws":
            return <IconAws key={i}/>
        case "python":
            return <IconPython key={i}/>
        case "html" :
            return <IconHtml key={i}/>
        case "css":
            return <IconCss key={i}/>
        case "js":
            return <IconJs key={i}/>
        case "react":
            return <IconReact key={i}/>
        case "flask":
            return <IconFlask key={i}/>
        case "jquery":
            return <IconJquery key={i}/>
        case "github":
            return <IconGithub key={i}/>
        case "nodejs":
            return <IconNodejs key={i}/>
        case "heroku":
            return <IconHeroku key={i}/>
        case "terraform":
            return <IconTerraform key={i}/>
        case "elastic":
            return <IconElastic key={i}/>
        case "mongo":
            return <IconMongo key={i}/>
        case "travis":
            return <IconTravis key={i}/>
        default:
            break;
    }
}

Item.Name = ProjectName;
Item.Description = ProjectDescription;
Item.Progress = ProjectProgress;
Item.Image = ProjectImage;
Item.TechStack = ProjectTechStack;

export default Item;