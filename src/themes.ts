import { createTheme } from '@mui/material';
import { deepPurple, blue, yellow, amber, grey } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: yellow['A700'],
            light: yellow['A400'],
            dark: amber['A700'],
            contrastText: grey[900]
        },
        secondary: {
            main: deepPurple[700],
            light: deepPurple[500],
            dark: deepPurple[900]
        }
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: blue[600],
            light: 'black',
            dark: 'black',
            contrastText: grey[50]
        },
        secondary: {
            main: blue[800],
            light: 'black',
            dark: 'black'
        }
    }
});