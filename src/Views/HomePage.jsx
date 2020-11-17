import { Divider, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    profile_img: {
        display: "block",
        height: "auto",
        width: "200px",
        margin: "2em auto 6em auto"
    },
    intro: {
        fontSize: "1.8em",
        fontFamily: "Roboto",
        textAlign: "center",
        margin: "2em 3em",    
    },
}));

const HomePage = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <p className={classes.intro}> Hello! My name is Dong Hyuk (Johnny) Jin, and I'm a Software Developer based @Toronto, Canada </p>
            {/* <img src="/img/profile.png" img="Johnny" className={classes.profile_img} /> */}
            <Divider variant="middle"/>
        </div>
    );
};



export default HomePage;