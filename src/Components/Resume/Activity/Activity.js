import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { MdPlace } from 'react-icons/md'

import Flags from '../../Flags';

const useStyles = makeStyles((theme) => ({
    root: { },
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
}));

const Activity = (props) => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <Grid container spacing={0}>                
                <Grid item xs={12} className={classes.description}>
                    <h5> Topographic Analyst (Sergeant) @<a href="http://www.army.mil.kr/webapp/user/indexMain.do?siteId=english">Republic of Korea Army</a></h5>
                </Grid>
                <Grid item xs={6} className={classes.location}>
                    <MdPlace color="#000"/> <p> Haman, South Korea <Flags code='kr'/> </p>
                </Grid>
                <Grid item xs={6}>
                    <p className={classes.timeline}> Dec. 2015 - Aug. 2017 </p>
                </Grid>
                <Grid item xs={12}>
                    <ul className={classes.description}>
                        <li>
                            Wrote topographic analysis scripts with GIS packages providing terrain based analysis on ArcGIS
                        </li>
                        <li>
                            Built in-house standalone coordinate system conversion tool
                        </li>
                        <li>
                            Squad leader of 20 squad members conducting daily routines and meetings.
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
};

export default Activity;