// import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

import styles from './styles.module.scss';

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import { Github, Linkedin, Stackoverflow } from '@icons-pack/react-simple-icons';


const initialTimeline = [
    {
        "title": "Title",
        "time": "2020-02-02 02:24 PM",
        "content" : "Hello world"
    }
]
// const initialTimeline = [];
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("md")] : {
            maxWidth: '100%',
        },
        [theme.breakpoints.up("md")] : {
            maxWidth: 345,
        },
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    iconButton: {
        fontSize: 0
    },
    collapsible: {
        maxHeight: '20em',
        overflow: 'scroll',
        borderTop: 'solid 1px rgba(0,0,0,0.15)',
    }
  }));

export const StickyCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.API_URL}/events`)
            .then(res => {
                setTimeline(res);
            });        
    }, [timeline]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
        props.setLayoutExpanded(!expanded);
    };

    return (
        <div className={classNames(styles['sticky-card'])}>
            <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        J
                    </Avatar>
                }
                title="Dong Hyuk Jin"
                subheader="Johnny"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Software developer with 1+ work experience. 
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Github" className={classes.iconButton}>
                    <a href="https://www.github.com/wesgur" target="_blank" rel="noopener noreferrer">
                        <Github/>
                    </a>                    
                </IconButton>
                <IconButton aria-label="LinkedIn" className={classes.iconButton}>
                    <a href="https://www.linkedin.com/in/dong-hyuk-johnny-jin-76a06aaa/" target="_blank" rel="noopener noreferrer">
                        <Linkedin/>
                    </a>
                </IconButton>
                <IconButton aria-label="Stackoverflow" className={classes.iconButton}>
                    <a href="https://stackoverflow.com/users/3639630/wesgur" target="_blank" rel="noopener noreferrer">
                        <Stackoverflow/>
                    </a>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.collapsible}>
                <CardContent>
                    {
                        timeline.length > 0 ? (
                            <Timeline>
                                { timeline.map((event, i) => (
                                    <TimelineEvent 
                                        title={event.commit_details.repo} 
                                        icon={<Github>commit</Github>}
                                        createdAt={event.commit_details.date}>
                                        { event.commit_details.message }
                                    </TimelineEvent>
                                )) }
                            </Timeline>
                        ) : (
                            <p> There is nothing to show in timeline </p>
                        )
                    }
                </CardContent>
            </Collapse>
            </Card>
        </div>
    );    
};
