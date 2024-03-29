import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { MdPlace } from 'react-icons/md'

import Flags from '../../Flags';

const education = [
    {
        "school": "University of Toronto, St.Geroge",
        "major": "Computer Science, Specialist",
        "schoolLink": "https://www.utoronto.ca/",
        "location": "Toronto, Canada",
        "countryCode" : "ca",
        "timeline": "Sept. 2013 - May. 2020",        
    },
    {
        "school": "International School Manila",
        "major": "International Baccalaureate, Diploma",
        "schoolLink": "https://www.ismanila.org/",
        "location": "Manila, Philippines",
        "countryCode" : "ph",
        "timeline": "Nov. 2007 - May. 2013"
    }
];

const useStyles = makeStyles((theme) => ({
    education: {
        width: '100%',
        margin: '1rem 0'
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',        
        '& > svg': {
            marginRight: '0.3em',
        }
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
            {
                education.map((e, i) => {                    
                    return (
                        <div className={classes.education} key={i}>
                            <Grid item xs={12}>
                                <h5> {e.major} @<a href={e.schoolLink}>{e.school}</a></h5>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item xs={6} className={classes.location}>
                                    <MdPlace color="#000"/> <p> {e.location} <Flags code={e.countryCode}/> </p>
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