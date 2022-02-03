import { createTheme, ThemeProvider } from '@mui/material';
import Login from '../Login/Login';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(255, 190, 0, 1)'
        }
    }
});

function App() {
    return(
        <ThemeProvider theme={theme}>
            <Login />
        </ThemeProvider>
    )
}

export default App;