import React, { useState, useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import { STORAGE_KEY_THEME } from "../../../Constants";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },    
  },
  light: {
    backgroundColor: grey[100],
    "&:hover": {
      backgroundColor: grey[200],
    },
  },
  dark: {
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[800],
    },
  },
}));

const ThemeFab = (props) => {
  const storageTheme = localStorage.getItem(STORAGE_KEY_THEME);
  const theme = storageTheme ? storageTheme == "light" : true;
  const [themeState, setThemeState] = useState(theme);

  const classes = useStyles();
  const fabLight = {
    color: "inherit",
    className: classes.light,
    icon: <Brightness7Icon />,
    label: "LightMode",
  };

  const fabDark = {
    color: "primary",
    className: classes.dark,
    icon: <Brightness3Icon />,
    label: "DarkMode",
  };

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem(STORAGE_KEY_THEME, "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem(STORAGE_KEY_THEME, "light");
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem(STORAGE_KEY_THEME);
    if (getTheme === "dark") {
      return document.body.classList.add("dark");
    } else {
      return document.body.classList.remove("dark");
    }
  });

  return (
    <div className={classes.root}>      
        { themeState ? (
            <DarkFab fab={fabDark} handleChange={handleChange} />
        ) : (
            <LightFab fab={fabLight} handleChange={handleChange} />
        )}
    </div>
  );
};

const LightFab = (props) => (
  <Fab
    aria-label={props.fab.label}
    className={props.fab.className}
    color={props.fab.color}
    onClick={props.handleChange}
  >
    <Brightness7Icon/>
  </Fab>
);

const DarkFab = (props) => (
  <Fab
    aria-label={props.fab.label}
    className={props.fab.className}
    color={props.fab.color}
    onClick={props.handleChange}
    >
    <Brightness3Icon />
  </Fab>
);

export default ThemeFab;
