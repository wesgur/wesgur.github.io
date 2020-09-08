import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

import { STORAGE_THEME_KEY } from '../../App';

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
import { ReactComponent as IconDocker } from './icons/docker.svg';
import { ReactComponent as IconWebpack } from './icons/webpack.svg';

const Item = (props) => (
    <li className={classNames(styles.item)}>
        <div className={classNames(styles.left, styles.content)}>
            <div className={classNames(styles.left)}>
                <ProjectName name={props.project.name} />           
                { props.project.summary ? <ProjectSummary summary={props.project.summary} /> : null }
                <ProjectDescription descriptions={props.project.descriptions} />            
                <ProjectTechStack tech_stack={props.project.tech_stack} />
            </div>
            <div className={classNames(styles.right, styles['timeline-content'])}>
                <ProjectProgress progress={props.project.progress} />
                { props.project.sandbox ? <ProjectSandbox progress={props.project.sandbox} /> : null }
            </div>
        </div>            
        <div className={classNames(styles.right, styles['image-content'])}>
            <ProjectImage link={props.project.link} img={props.project.img} />
        </div>        
    </li>
);

const ProjectName = (props) => (
    <h2> {props.name} </h2>
);

const ProjectSummary = (props) => (
    <p> {props.summary} </p>
);

const ProjectDescription = (props) => {
    return ( 
        <ul>
            {
                props.descriptions && props.descriptions.map((description, i) => {
                    return ( <li key={i}> { description } </li> );
                })
            }
        </ul>
    );
};

const ProjectProgress = (props) => (
    <h2> {props.progress} </h2>
);

const ProjectSandbox = (props) => (
    <button> Try it out </button>
)

const ProjectTechStack = (props) => {
    return (
        <div className={classNames(styles['tech-stack'])}>
            <h3> # Technology Stack </h3>
            { props.tech_stack && props.tech_stack.map((tech, i) => {
                return ProjectTechnologyMapper(tech, i);    
            })}
        </div>        
    );
}

// TODO: Refactor
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
        case "docker":
            return <IconDocker key={i}/>
        case "webpack":
            return <IconWebpack key={i}/>
        default:
            break;
    }
}

const ProjectImage = (props) => {
    const theme = localStorage.getItem(STORAGE_THEME_KEY);
    let img = props.img
    
    if (typeof img == 'object'){
        if (theme == 'dark'){
            img = props.img['dark'];
        } else if (theme == 'light'){
            img = props.img['light']
        } else {
            img = props.img['default'];
        }
    }

    return (
        <a href={props.link ? props.link : '#'}>
            <img src={img ? img : 'screenshots/image-not-found.png' } alt={"project_image"}/>
        </a>
    );    
};

Item.Name = ProjectName;
Item.Description = ProjectDescription;
Item.Progress = ProjectProgress;
Item.Image = ProjectImage;
Item.TechStack = ProjectTechStack;

export default Item;