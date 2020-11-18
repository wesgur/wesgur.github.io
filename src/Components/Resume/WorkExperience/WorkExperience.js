import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Subheaders from '../Subheaders';

const experiences = [
    {
        "companyName": "Bluecat Networks",
        "position": "Software Developer Co-op",
        "companyLink": "https://bluecatnetworks.com/",
        "companyLocation": "Toronto, Canada",
        "timeline": "Aug. 2017 - Aug. 2018",
        "description": [
            "Build AWS infrastructure from ground up to achieve zero downtime upgrade and enable remote deployment for containerized services.",
            "Enable private dependency management in Go before modules were introduced.",
            "Implement realtime notification services using sockets and long polling.",
            "Reduce build time and CI/CD pipeline with Docker layer caching.",
            "Participated in the design and implementation of a software defined networking system."
        ]
    },
    {
        "companyName": "Mobile C&C",
        "position": "Software Developer Intern",
        "companyLink": "https://www.mcnc.co.kr/publishing_en/main/html/main.html",
        "companyLocation": "Seoul, South Korea",
        "timeline": "Apr. 2014 - Sept. 2014",
        "description": [
            "Developed RESTful APIs with Spring Framework serving hybrid mobile applications.",
            "Wrote unit and integration tests with JUnit."
        ]
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '1em 0'
    },
    timeline: {
        float: 'right',
    },
    description: {
        marginTop: '1em'
    },
  }));

const WorkExperience = (props) => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} >
                <Subheaders>
                    Work Experience
                </Subheaders>
            </Grid>

            { experiences.map((experience, i) => ( <Experience experience={experience} key={i}/>)) }            
        </Grid>
    );
};

const Experience = (props) => {
    const experience = props.experience;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <h5 className={classes.position}> {experience.position} @<a href={experience.companyLink} target="_blank" rel="noopener noreferrer">{experience.companyName} </a> </h5>            
            </Grid>
            <Grid container direction="row">
                <Grid item xs={6}>
                    <p> { experience.companyLocation } </p> 
                </Grid>
                <Grid item xs={6}>
                    <p className={classes.timeline}> { experience.timeline } </p>        
                </Grid>        
            </Grid>
            <Grid item xs={12}>
                <ul className={classes.description}>
                    { experience.description && experience.description.map((description, i) => (
                        <li key={i}>
                            <p> { description } </p>        
                        </li>
                    ) ) }
                </ul>
            </Grid>
        </div>
    );
};

export default WorkExperience;