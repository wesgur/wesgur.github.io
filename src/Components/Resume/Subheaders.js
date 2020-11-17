import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1em 0',
        fontWeight: 'bold',
    },
}));

const Subheaders = (props) => {
    const classes = useStyles();

    return (
        <h4 className={classes.root}>
            {props.children}
        </h4>
    );
};

export default Subheaders;