import React, { useState, useEffect, createContext } from "react";
import { useMediaPredicate } from "react-media-hook";

export const STORAGE_THEME_KEY = "Theme";
export const AppContext = createContext();

const AppProvider = props => {
    const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'
    const [appData, setApp] = useState({
        themeMode: localStorage.getItem(STORAGE_THEME_KEY) || preferredTheme,
        changeTheme: mode => setApp(data => (
            {...data, themeMode: mode }
        )),
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_THEME_KEY, appData.themeMode)
    }, [appData.themeMode]);

    return <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
}

export default AppProvider;