import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import { STORAGE_THEME_KEY } from '.././../App';

const useStyles = makeStyles((theme) => ({
	root: {
	  backgroundColor: theme.palette.background.paper,
	  width: 500,
	  position: 'relative',
	  minHeight: 200,
    },
    light: {
        position: 'fixed',
	    bottom: theme.spacing(4),
	    right: theme.spacing(4),
	    backgroundColor: grey[100],
	    '&:hover': {
		    backgroundColor: grey[200],
	    },
    },
	dark: {
	  position: 'fixed',
	  bottom: theme.spacing(4),
	  right: theme.spacing(4),
	  backgroundColor: grey[900],
	  '&:hover': {
		backgroundColor: grey[800],
	  },
    },    
}));

const ThemeFab = (props) => {
    const storageTheme = localStorage.getItem(STORAGE_THEME_KEY);
    const theme = storageTheme ? (storageTheme=='light') : true;
    const [themeState, setThemeState] = useState(theme);

    const classes = useStyles();
	const fabLight = {
		color: 'inherit',
		className: classes.light,
		icon: <Brightness7Icon />,
		label: 'LightMode',
    };
    
    const fabDark = {
        color: 'primary',
        className: classes.dark,
        icon: <Brightness3Icon />,
        label: 'DarkMode'
    }

    const handleChange = () => {
        setThemeState(!themeState);
        if (themeState) {
            localStorage.setItem(STORAGE_THEME_KEY, 'dark');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem(STORAGE_THEME_KEY, 'light');
            document.body.classList.remove('dark-mode');
        }
    }

    useEffect(() => {
        const getTheme = localStorage.getItem(STORAGE_THEME_KEY);
        console.log(getTheme);
        if (getTheme === 'dark') {
            return  document.body.classList.add('dark-mode');
        } else {
            return document.body.classList.remove('dark-mode');
        }
    });

    return (
        themeState ? <DarkFab fab={fabDark} handleChange={handleChange} /> : <LightFab fab={fabLight} handleChange={handleChange} /> 
    );
};

const LightFab = (props) => (
    <Fab variant="extended" aria-label={props.fab.label} className={props.fab.className} color={props.fab.color} onClick={ props.handleChange }>
        <Brightness7Icon style={{ "marginRight": "5px" }}/>
        Light Mode
    </Fab>
);

const DarkFab = (props) => (
    <Fab variant="extended" aria-label={props.fab.label} className={props.fab.className} color={props.fab.color} onClick={ props.handleChange }>
        <Brightness3Icon style={{ "marginRight": "5px" }}/>
        Dark  Mode
    </Fab>
);

export default ThemeFab;