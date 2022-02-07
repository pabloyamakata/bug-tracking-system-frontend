import { ThemeProvider } from '@mui/material';
import { lightTheme } from '../../themes';
import Navbar from '../Navbar/Navbar';
import BugForm from '../Forms/BugForm';

function App() {
    return(
        <ThemeProvider theme={lightTheme}>
            <Navbar />
            <BugForm />
        </ThemeProvider>
    )
}

export default App;