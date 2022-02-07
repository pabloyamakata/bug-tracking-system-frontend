import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme';
import Navbar from '../Navbar/Navbar';
import BugForm from '../Forms/BugForm';

function App() {
    return(
        <ThemeProvider theme={theme}>
            <Navbar />
            <BugForm />
        </ThemeProvider>
    )
}

export default App;