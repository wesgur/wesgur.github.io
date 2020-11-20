import React from 'react';

import { Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root : {},
    row : {
        minHeight: '400px',
        padding: '2em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")] : {
            padding: '1em',
        },
    },
    divider: {
        marginTop: '1em',
        marginBottom: '1em'
    }
}));

const PageRow = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                {props.children}
            </div>

            <Divider variant="middle" className={classes.divider}/>    
        </div>
    );
}

export default PageRow;