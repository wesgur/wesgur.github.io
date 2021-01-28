import React from 'react';

import { makeStyles, Grid } from '@material-ui/core';
import { MdPlace } from 'react-icons/md'; 

const useStyles = makeStyles((theme) => ({
    timeline: {
        float: 'right',
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',        
        '& > svg': {
            marginRight: '0.3em',
        }
    },
    description: {
        margin: '1em 0 0 0'
    }
}))

export const PageRowItem = (props) => { 
    const classes = useStyles();

    return (
        <Grid container spacing={0}>                
            <Grid item xs={12} className={classes.description}>
                <h5> {props.item.title} @<a href={props.item.locationLink ? props.item.locationLink : '#'}>{props.item.location}</a> </h5>
            </Grid>
            <Grid item xs={6} className={classes.location}>
                <MdPlace color="#000"/> <p> {props.item.geography} </p>
            </Grid>
            <Grid item xs={6}>
                <p className={classes.timeline}> {props.item.timeline} </p>
            </Grid>
            <Grid item xs={12}>
                <ul className={classes.description}>
                    {
                        props.item.descriptions.map((description, i) => (
                            <li key={i}>
                                {description}
                            </li>
                        ))
                    }
                </ul>
            </Grid>
        </Grid>
    );
}

export default PageRowItem;