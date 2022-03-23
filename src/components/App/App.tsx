import { useState } from 'react';
import { ContextProvider } from '../../context/ContextProvider';

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
import BugUpdater from '../Forms/BugUpdater';
import ProjectForm from '../Forms/ProjectForm';
import ProjectUpdater from '../Forms/ProjectUpdater';
import Bugs from '../Reports/Bugs';
import Projects from '../Reports/Projects';

function App() {
    const [isModeDark, setIsModeDark] = useState(0);
    const location = useLocation();
    return(
        <ContextProvider>
            <ThemeProvider theme={isModeDark ? darkTheme : lightTheme}>
                {location.pathname === '/login' || 
                location.pathname ==='/registration' ? null : 
                <Navbar 
                isModeDark={isModeDark} 
                setIsModeDark={setIsModeDark} />}
                <Routes>
                    <Route path='login' element={<Login />} />
                    <Route path='registration' element={<Registration />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='newbug' element={<BugForm />} />
                    <Route path='editbug' element={<BugUpdater />} />
                    <Route path='newproject' element={<ProjectForm />} />
                    <Route path='editproject' element={<ProjectUpdater />} />
                    <Route path='bugreports' element={<Bugs />} />
                    <Route path='projectreports' element={<Projects />} />
                    <Route path='*' element={<Navigate to='login' />} />
                </Routes>
            </ThemeProvider>
        </ContextProvider>
    )
}

export default App;