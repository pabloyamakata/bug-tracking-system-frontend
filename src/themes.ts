import { createTheme } from '@mui/material';
import { blue, yellow, amber } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: yellow['A700'],
            light: yellow['A400'],
            dark: amber['A700']
        },
        secondary: {
            main: blue[800],
            light: blue[600],
            dark: blue[900]
        }
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: blue[600],
            light: 'black',
            dark: 'black'
        },
        secondary: {
            main: blue[800],
            light: 'black',
            dark: 'black'
        }
    }
});