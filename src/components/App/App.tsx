import { useState } from 'react';

import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../../themes';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import BugForm from '../Forms/BugForm';
import ProjectForm from '../Forms/ProjectForm';
import Bugs from '../Reports/Bugs';
import Projects from '../Reports/Projects';

function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    return(
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Router>
                <Navbar 
                isDarkMode={isDarkMode} 
                setIsDarkMode={setIsDarkMode} />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='newbug' element={<BugForm />} />
                    <Route path='newproject' element={<ProjectForm />} />
                    <Route path='bugreports' element={<Bugs />} />
                    <Route path='projectreports' element={<Projects />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App;