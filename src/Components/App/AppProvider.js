import React, { useState, useEffect, createContext } from "react";
import { useMediaPredicate } from "react-media-hook";
import { STORAGE_KEY_THEME } from '../../Constants';

export const AppContext = createContext();

const AppProvider = props => {
    const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'
    const [appData, setApp] = useState({
        themeMode: localStorage.getItem(STORAGE_KEY_THEME) || preferredTheme,
        changeTheme: mode => setApp(data => (
            {...data, themeMode: mode }
        )),
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_THEME, appData.themeMode)
    }, [appData.themeMode]);

    return <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
}

export default AppProvider;