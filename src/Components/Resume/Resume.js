import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { PageRow, PageRowHeader } from '../Page';
import { Education } from './Education';
import WorkExperience from './WorkExperience/WorkExperience';
import Activity from './Activity/Activity';

const experiences = {
  "works" : [
    {
      "companyName": "Bluecat Networks",
      "position": "Software Engineer",
      "companyLink": "https://bluecatnetworks.com/",
      "companyLocation": "Toronto, Canada",
      "timeline": "Jan. 2021 - Today",
      "description": [
          "Develop platforms and services that deliver containerized microservices."
      ]
    },
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
          "Reduce build time for CI/CD pipeline with Docker layer caching.",
          "Participated in the design and implementation of software defined networking system."
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
  ]
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& h4' : {
      // textAlign: 'center',
      marginBottom: '1rem',
    },
    '& p,h5' : {
      margin: 0,
    }, 
    '& > div' : {
      margin: '1.5rem 0'
    }
  }
}));

// TODO: Add tech skills
const Resume = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <WorkExperience/>
      
      <Divider variant="middle"/>

      <Education/>

      <Divider variant="middle"/>

      <Activity/>       */}

      <PageRow>
        <PageRowHeader> Work Experience </PageRowHeader>

        <WorkExperience experiences={experiences.works}/>
      </PageRow>

      <PageRow>
        <PageRowHeader> Education </PageRowHeader>

        <Education/>
      </PageRow>

      <PageRow>
        <PageRowHeader> Activity </PageRowHeader>
        
        <Activity/>
      </PageRow>

      
    </div>
  );
}

export default Resume;