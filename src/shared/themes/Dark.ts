import { createTheme } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: purple[700],
      dark: purple[800],
      light: purple[500],
      contrastText: "#fff" 
    },
    secondary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: "#fff" 
    },
    background: {
      default: '#202124',
      paper: '#303134'
    }
  }
});