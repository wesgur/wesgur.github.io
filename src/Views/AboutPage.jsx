import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { PageTitle } from '../Components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

const AboutPage = (props) => {
    const classes = useStyles();
    return ( 
        <section>
            <PageTitle title="About Myself"/> 
            <div className={classes.root}>
              <p> Hello! My name is Dong Hyuk (Johnny) Jin, and I'm a software developer based in Toronto. </p>
            </div>            
        </section>
    );
};

export default AboutPage;