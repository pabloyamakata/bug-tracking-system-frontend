import { useState } from 'react';

import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../../themes';

import {
    Routes,
    Route,
    Navigate,
    useLocation
} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Dashboard from '../Dashboard/Dashboard';
import BugForm from '../Forms/BugForm';
import ProjectForm from '../Forms/ProjectForm';
import Bugs from '../Reports/Bugs';
import Projects from '../Reports/Projects';

function App() {
    const [isModeDark, setIsModeDark] = useState(false);
    const location = useLocation();
    return(
        <ThemeProvider theme={isModeDark ? darkTheme : lightTheme}>
            {location.pathname === '/login' || location.pathname ==='/registration' ? null : 
                <Navbar 
                isModeDark={isModeDark} 
                setIsModeDark={setIsModeDark} />}
                <Routes>
                    <Route path='login' element={<Login />} />
                    <Route path='registration' element={<Registration />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='newbug' element={<BugForm />} />
                    <Route path='newproject' element={<ProjectForm />} />
                    <Route path='bugreports' element={<Bugs />} />
                    <Route path='projectreports' element={<Projects />} />
                    <Route path='*' element={<Navigate to='login' />} />
                </Routes>
        </ThemeProvider>
    )
}

export default App;