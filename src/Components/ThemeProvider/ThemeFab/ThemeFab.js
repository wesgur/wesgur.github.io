import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

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
	    backgroundColor: grey[200],
	    '&:hover': {
		    backgroundColor: grey[300],
	    },
    },
	dark: {
	  position: 'fixed',
	  bottom: theme.spacing(4),
	  right: theme.spacing(4),
	  backgroundColor: grey[700],
	  '&:hover': {
		backgroundColor: grey[600],
	  },
    },    
}));

const ThemeFab = (props) => {
    const [themeState, setThemeState] = useState(false);

    const classes = useStyles();
	const fabLight = {
		color: '#fff',
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
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
    });


    return (
        themeState ? <LightFab fab={fabLight} handleChange={handleChange} /> : <DarkFab fab={fabDark} handleChange={handleChange} />
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
        Dark Mode
    </Fab>
);

export default ThemeFab;