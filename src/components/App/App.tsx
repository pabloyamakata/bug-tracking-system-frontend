import { useState } from 'react';

import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../../themes';

import Navbar from '../Navbar/Navbar';
import Bugs from '../Reports/Bugs';

function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    return(
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Navbar 
            isDarkMode={isDarkMode} 
            setIsDarkMode={setIsDarkMode} />
            <Bugs />
        </ThemeProvider>
    )
}

export default App;