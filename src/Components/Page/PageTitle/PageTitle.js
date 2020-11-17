import React from 'react';

import classNames from 'classnames';

import { Divider, makeStyles } from '@material-ui/core';
import styles from './styles.module.scss';

const useStyles = makeStyles((theme) => ({
    divider: {
        marginBottom: '1em',
    }
}));

const PageTitle = (props) => {
    const classes = useStyles();

    return (
        <div>
            <h3 className={classNames(styles.title)}> 
                { props.title } 
            </h3>

            <Divider className={classes.divider}/>        
        </div>
    );
};

export default PageTitle;