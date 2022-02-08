import { ThemeProvider } from '@mui/material';
import { lightTheme } from '../../themes';
import Navbar from '../Navbar/Navbar';
import Bugs from '../Reports/Bugs';

function App() {
    return(
        <ThemeProvider theme={lightTheme}>
            <Navbar />
            <Bugs />
        </ThemeProvider>
    )
}

export default App;