import { useState, createContext } from 'react';
import { globalState } from '../../globalState';

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

export const AppContext = createContext<any>(null);

function App() {
    const [state, setState] = useState(globalState);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const location = useLocation();

    return(
        <AppContext.Provider value={{state, setState}}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                {location.pathname === '/login' || location.pathname ==='/registration' ? null : 
                    <Navbar 
                    isDarkMode={isDarkMode} 
                    setIsDarkMode={setIsDarkMode} />}
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
        </AppContext.Provider>
    )
}

export default App;