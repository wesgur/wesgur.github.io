import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        // textTransform: "uppercase",
        fontWeight: "bold",
        marginBottom: "1em",
    },

}));

const PageRowHeader = (props) => {
    const classes = useStyles();

    return (        
        <h4 className={classes.root}> {props.children} </h4>
    ); 
};

export default PageRowHeader;