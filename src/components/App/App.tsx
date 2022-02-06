import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme';
import Navbar from '../Navbar/Navbar';
import Bugs from '../Reports/Bugs';

function App() {
    return(
        <ThemeProvider theme={theme}>
            <Navbar />
            <Bugs />
        </ThemeProvider>
    )
}

export default App;