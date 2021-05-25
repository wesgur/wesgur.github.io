import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { blue } from '@material-ui/core/colors';
import { Contacts, Email, ExpandMore, Language } from '@material-ui/icons'
import { Timeline, TimelineEvent } from 'react-event-timeline';

import { Github, Linkedin, Stackoverflow } from '@icons-pack/react-simple-icons';

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
    "empty-timeline": {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "17.2em",
        margin: "auto",
    },
    avatar: {
      backgroundColor: blue[50],
      height: "60px",
      width: "60px"
    },
    iconButton: {
        fontSize: 0
    },
    collapsible: {
        maxHeight: '20em',
        overflow: 'scroll',
        borderTop: 'solid 1px rgba(0,0,0,0.15)',
    },    
    timelineHash: {
        color: '#26abff',
    },
    actions: {
        borderTop: 'solid 1px #DBE1E5',
    },
    cardContent:{
        fontSize: '14px',
        padding: '0 1em 0.5em 1em'
    },
    cardContentItem: {
        margin: '0.5em 0',
        "& > svg" : {
            marginRight: '0.5em'
        }
    }
  }));

export const StickyCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [timeline, setTimeline] = useState([]);
    const [loading, setLoading] = useState(false);

    const timelineContentStyle = {
        margin: "5px 0 0 0",
        padding: "5px",
        backgroundColor: "#F5F8F9",
        boxShadow: "none",
        lineHeight: "140%",
    };

    const timelineBubbleIconStyle = {                
        border: "solid 2px #26abff"                        
    }

    useEffect(() => {
       fetchRecentActivities()
    }, []);

    const fetchRecentActivities = () => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}/events`, 
            { headers: {
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }            
        }).then(res => {
            setTimeline(res.data);
            setLoading(false);
        });        
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
        props.setLayoutExpanded(!expanded);
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar} src="/img/profile.png">
                        </Avatar>
                    }
                    title="Dong Hyuk Jin"
                    titleTypographyProps={{variant:'subtitle1'}}
                    subheader="Johnny"
                    subheaderTypographyProps={{variant:'subtitle2'}}
                />
                <CardContent className={classes.cardContent}>
                    <div className={classes.cardContentItem}>
                        <Email/> 
                        <a href="mailto:wesgur@gmail.com">wesgur@gmail.com </a>
                    </div>                    
                    <div className={classes.cardContentItem}>
                        <Contacts/>+1 647 901 5355
                    </div>
                    <div className={classes.cardContentItem}>
                        <Language/>
                        <a href="https://www.wesgur.com">https://www.wesgur.com </a>
                    </div>                     
                </CardContent>
                <CardActions className={classes.actions} disableSpacing>
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
                        <ExpandMore />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.collapsible}>
                    <CardContent>
                        {
                            loading ? (   
                                <div className={classes["empty-timeline"]}>
                                    <p> Loading... <br /> Should only take few seconds. &#128512; </p>
                                </div> 
                            ) :  timeline ? (
                                <Timeline>
                                    { timeline.map((event, i) => (
                                        <TimelineEvent 
                                            title={<a href={event.commit_details.repo_url}> {event.commit_details.repo} </a>} 
                                            icon={<Github>commit</Github>}
                                            createdAt={ moment(new Date(event.commit_details.date)).fromNow() }
                                            key={i}                                            
                                            contentStyle={timelineContentStyle}
                                            bubbleStyle={timelineBubbleIconStyle}>                                        
                                            <a href={event.commit_details.url}
                                                className={classes.timelineHash}> 
                                                { event.commit_hash.substring(0, 7) } 
                                            </a> { FilterMessage(event.commit_details.message) }
                                        </TimelineEvent>
                                    )) }
                                </Timeline>
                            ) : (
                                <div className={classes["empty-timeline"]}>
                                    <p> No recent events. <br /> Come back later for updates! </p>                                   
                                </div>   
                            ) 
                        }
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );    
};

const FilterMessage = (message) => {
    if (typeof message === "string" && message.includes("deploy:")) {
        let s = message.split(":");
        message = `deploy: ${s[1].trim().substring(0,7)}`
    }

    return message;
}