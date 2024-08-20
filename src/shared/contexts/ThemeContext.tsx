import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";

import { DarkTheme, LightTheme } from "../themes";

type Theme = 'Light' | 'Dark';

interface IThemeContextData {
  themeName: Theme;
  toggleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {

  const [themeName, setThemeName] = useState<Theme>('Light');
  
  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'Light' ? 'Dark' : 'Light');
  }, []);

  const theme = useMemo(() => {
    if(themeName === "Light") return LightTheme;

    return DarkTheme;
  },[themeName]);

  return (
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}