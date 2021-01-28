import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { PageRow, PageRowHeader } from '../Page';
import { Education } from './Education';
import WorkExperience from './WorkExperience/WorkExperience';
import Activity from './Activity/Activity';

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

        <WorkExperience/>
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