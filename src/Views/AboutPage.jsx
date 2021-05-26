import React from "react";
import { makeStyles } from '@material-ui/core';

import { PageTitle } from '../Components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  about: {
    fontsize: "16px",
    fontFamily: "Roboto",
    margin: "1em 4em",
  },
  flag: {
    width: "60px",
    height: "auto",
    float: "right",
    marginRight: "1em"
  },
  timelineContent: {
    marginBottom: "5em",
  }
}));

const AboutPage = (props) => {
    const classes = useStyles();

    return ( 
        <section>
          <div className={classes.root}>
            <PageTitle title="About Myself"/>             
          </div>
        </section>        
    );
};

export default AboutPage;