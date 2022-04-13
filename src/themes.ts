import { createTheme } from '@mui/material';
import { deepPurple, blue, indigo, yellow, amber, grey } from '@mui/material/colors';

export const lightTheme = createTheme({
    typography: {
        fontFamily: 'Public Sans, sans-serif'
    },
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
            dark: deepPurple[900],
            contrastText: grey[100]
        },
        action: {
            hover: grey[200]
        }
    }
});

export const darkTheme = createTheme({
    typography: {
        fontFamily: 'Public Sans, sans-serif'
    },
    palette: {
        mode: 'dark',
        primary: {
            main: indigo[700],
            light: indigo[500],
            dark: indigo[900],
            contrastText: grey[50]
        },
        secondary: {
            main: blue[700],
            light: blue[500],
            dark: indigo[900],
            contrastText: grey[900]
        },
        action: {
            hover: grey[800]
        },
        text: {
            primary: 'rgba(237, 237, 237, .75)'
        }
    }
});