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
      "position": "Software Engineer II",
      "companyLink": "https://bluecatnetworks.com/",
      "companyLocation": "Toronto, Canada",
      "timeline": "April. 2022 - Today",
      "description": [
          "Configure Debian image to support cloud platforms (AWS, Azure, GCP)",
      ]
    },
    {
        "companyName": "Bluecat Networks",
        "position": "Software Engineer",
        "companyLink": "https://bluecatnetworks.com/",
        "companyLocation": "Toronto, Canada",
        "timeline": "Jan. 2021 - March. 2022",
        "description": [
            "Develop API to deploy custom built images in cloud using Go.",
            "Build custom Debian 11 image to host containerized applications.",
            "Migrate AWS cloudformation deployed AWS infrastructures to Terraform.",
            "Design and implement manifest based CI/CD pipelines to build and release VM images.",
            "Write daemon services that would interact with cloud management services in Go."
        ]
    },
    {
      "companyName": "Bluecat Networks",
      "position": "Software Developer Co-op",
      "companyLink": "https://bluecatnetworks.com/",
      "companyLocation": "Toronto, Canada",
      "countryCode": "ca",
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
      "countryCode": "kr",
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

const Resume = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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