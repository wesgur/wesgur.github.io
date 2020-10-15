import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Education } from './Education';
import WorkExperience from './WorkExperience/WorkExperience';
import Activity from './Activity/Activity';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& h4' : {
      textAlign: 'center',
      marginBottom: '2rem',
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
      <WorkExperience/>

      <Education/>

      <Activity/>

      {/* <h4> Technology Skills </h4>   */}
    </div>
  );
}

export default Resume;