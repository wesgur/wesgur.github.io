import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Subheaders from '../Subheaders';

const education = [
    {
        "school": "University of Toronto, St.Geroge",
        "major": "Computer Science, Specialist",
        "schoolLink": "https://www.utoronto.ca/",
        "location": "Toronto, Canada",
        "timeline": "Sept. 2013 - May. 2020",        
    },
    {
        "school": "International School Manila",
        "major": "International Baccalaureate, Diploma",
        "schoolLink": "https://www.ismanila.org/",
        "location": "Manila, Philippines",
        "timeline": "Nov. 2007 - May. 2013"
    }
];

const useStyles = makeStyles((theme) => ({
    education: {
        width: '100%',
        margin: '1rem 0'
    },
    timeline: {
        float: 'right',
    },
}));

//TODO: Add relevant courses
const Education = (props) => {
    const classes = useStyles();

    return ( 
        <Grid container spacing={0}>
            <Grid item xs={12} >
                <Subheaders> Education </Subheaders>          
            </Grid>

            {
                education.map((e, i) => {                    
                    return (
                        <div className={classes.education} key={i}>
                            <Grid item xs={12}>
                                <h5> {e.major} @<a href={e.schoolLink}>{e.school}</a></h5>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item xs={6}>
                                    <p> {e.location} </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p className={classes.timeline}> {e.timeline} </p>
                                </Grid>
                            </Grid>
                        </div>
                    )
                })
            }
        </Grid>
     );
};

export default Education;