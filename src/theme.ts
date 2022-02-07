import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: 'rgba(255, 190, 0, 1)',
            light: 'rgba(255, 205, 59, 1)',
            dark: 'rgba(209, 156, 0, 1)',
            contrastText: 'rgba(10, 10, 10, 1)'
        }
    }
});
