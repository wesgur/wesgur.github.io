import React from 'react';

import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { HashLink } from 'react-router-hash-link';

import { PageTitle } from '../Components/Page';

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
      "name" : "Personal Website",
      "summary" : "Personal website built with React and Material UI. Application is deployed to Github Pages.",
      "descriptions" : [
          "Developed using React ",
          "Docker setup for development environment",
          "CI/CD setup with Github Actions",
          "Automatic deployment to Github Pages"
      ],
      "img" : "screenshots/homepage_dark.png",
      "progress" : "April 2020 - Ongoing",
      "tech_stack" : [ "react", "js", "html", "scss", "css", "github", "docker" ],
      "link" : "",
      "repository" : "https://github.com/wesgur/wesgur.github.io",
  },
  {
      "name" : "Perfect Pitch",
      "summary" : "Responsive web application solving music licensing problems. Work done in a team of 2 as a part of software development and start up course in University of Toronto.",
      "descriptions" : [
          "Developed with React",
          "Restful API developed with Node.js and Express with OpenAPI specifications",
          "Spotify API integration for authentication and user data",
          "Mongo database used for persistent data",
          "Docker and docker-compose setup for development environment",
          "CI/CD setup with Github Actions deploying to Heroku instnace",
          "Organize scrum board with Github Project Management"
      ],
      "img" : "screenshots/perfect-pitch.png",
      "progress" : "Jan 2020 - May 2020",
      "tech_stack" : [ "react", "html", "css", "js", "nodejs", "webpack", "mongo", "heroku", "github", "docker" ],
      "link" : "https://perfect-pitch-web.herokuapp.com/",
      "repository" : "https://github.com/dcsil/perfect-pitch",
  },
  {
      "name" : "Cancer Care Ontario E-Health Application",
      "summary" : "A web application developed for a project course in University of Toronto. The project was developed in collaboration of Cancer Care Ontario to increase efficienccy of data management between hospital departments.",
      "descriptions" : [
          "Developed with React and Redux",
          "Restful API developed with Node.js and Express",
          "OpenAPI Documentation",
          "Used mongo database for persistent data and caching",
          "CI/CD with Travis CI deploying to Heroku instance",
          "Docker setup for development and production environment",            
          "Elastic search integration for search enhancement"
      ],
      "img" : "screenshots/cancer-care.png",
      "progress" : "Sept 2019 - Dec 2019",
      "tech_stack" : [ "react", "redux", "html", "css", "js", "nodejs", "mongo", "heroku", "travis", "elastic", "docker" ],
      "link" : "",
      "repository" : "https://github.com/csc302-fall-2019/proj-Team4",
  },
  {
      "name" : "Youtube Music Metadata parser",
      "summary" : "A web application designed to resolve music metadata from youtube links. This project was developed targeting users who requires metadata for sound files.",
      "descriptions" : [
          "Service developed with Python Flask",
          "Web crawling with Beautiful Soup library",
          "jQuery used for DOM manipulation",
          "Deployed on AWS EC2 instance",
      ],
      "img" : "screenshots/youtube-parser.png",
      "progress" : "Jan 2018 - Discontinued",
      "tech_stack" : [ "python", "flask", "html", "css", "js", "jquery", "aws" ],
      "link" : "",
      "repository" : "https://github.com/wesgur/youtube-music-metadata-parser",
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")] : {
      maxWidth: '100%',
    },
    [theme.breakpoints.up("md")] : {
      maxWidth: 345,
    },    
    marginBottom: '1em',
    border: 'solid 1px rgba(0,0,0,0.25)',
    boxShadow: 'none !important',        
  },
  cardArea: {
    '& a:hover':{
      textDecoration: 'none'
    },
  },
  cardContent: {
    [theme.breakpoints.up("md")] : {
      minHeight: 140,
    },    
  },
  cardMedia: {
    [theme.breakpoints.down("md")] : {
      height: 200,
    },
    [theme.breakpoints.up("md")] : {
      height: 160,
    },
  }  
}));

const ProjectPage = (props) => (
    <section>    
        <PageTitle title="Projects"/> 

        <ProjectItems>
          { projects.map((project, i) => (
              <ProjectItem project={project} key={i}/>
          ))}
        </ProjectItems>        
    </section>
);

const ProjectItems = (props) => (
  <Grid container spacing={0}>
    {props.children}
  </Grid>
);

const ProjectItem = (props) => {
  const classes = useStyles();

  return (
    <Grid item md={6}>      
        <Card className={classes.root}>
          <CardActionArea className={classes.cardArea}>
            <a href={props.project.link ? props.project.link : `#${props.project.name}`} target={ props.project.link ? '_blank' : '' } rel="noopener noreferrer">          
              <CardMedia
                alt={props.project.name}
                className={classes.cardMedia}
                component="img"
                image={props.project.img}
                title={props.project.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.project.summary}
                </Typography>
              </CardContent>
            </a>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
    </Grid>
  );
};

export default ProjectPage;