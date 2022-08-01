import React from 'react';

import classNames from 'classnames';

import { Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    divider: {
        marginBottom: '1em',
    },
    title: {
        fontFamily: "'Roboto', 'Roboto Condensed','Gerogia'",
        fontWeight: "bold",
        fontSize: "24px",
        textTransform: "uppercase",
        marginBottom: '0.5em'
    }
}));

const PageTitle = (props) => {
    const classes = useStyles();

    return (
        <div>
            <h4 className={classNames(classes.title)}> 
                { props.title } 
            </h4>

            <Divider className={classes.divider}/>        
        </div>
    );
};

export default PageTitle;