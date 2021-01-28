import React from 'react';

import PageRowItem from '.';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
}));

export const PageRowItems = (props) => {
    return (
        <Grid container spacing={0}>
            {props.items.map(item => (
                <PageRowItem item={item}/>
            ))}
        </Grid>
    );
};

