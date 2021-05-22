import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({    
    root: {
        [theme.breakpoints.down("lg")] : {
            maxWidth: '100%',
        },
        [theme.breakpoints.up("lg")] : {
            maxWidth: 345,
        },
        backgroundColor: '#F5F8F9',
        border: 'solid 1px #DBE1E5'
    },
    iconButton: {
        fontSize: 0,
        padding: '1rem',
    },
    icon: {
        '&:hover, &:focus' : {
            fill: '#26abff', //color-accent
        },
    },
    content: {
        display: 'flex',
        alignContent: 'center',
        padding: '0px !important',        
    },
}));

export const StickyCardSecondary = (props) => {
    const classes = useStyles();

    return ( 
        <div className={props.expanded ? classNames(styles["expanded-card"]) : classNames(styles.card)}>
            <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <IconButton aria-label="Download" className={classes.iconButton}>
                        <a href={props.resumeLink}>
                            <GetAppIcon className={classes.icon}/>
                        </a>
                    </IconButton>    
                    <p> Download Resume </p>                
                </CardContent>
            </Card>
        </div>
    );
}