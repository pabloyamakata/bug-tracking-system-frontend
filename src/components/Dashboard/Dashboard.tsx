import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import DoughnutChart from '../Charts/DoughnutChart/DoughnutChart';

import { CustomPaper } from './DashboardStyles';
import Typography from '@mui/material/Typography';

const bugs_URL = 'https://bug-tracking-system-backend.000webhostapp.com/bugs.php';
const projects_URL = 'https://bug-tracking-system-backend.000webhostapp.com/projects.php';
const userNameURL = 'https://bug-tracking-system-backend.000webhostapp.com/username.php';

interface BugInterface {
    id: number;
    name: string;
    description: string;
    project: string;
    project_leader: string;
    current_status: string;
    priority_level: string;
    severity_level: string;
    initial_date: Date;
    final_date: Date;
}

interface ProjectInterface {
    id: number;
    name: string;
    description: string;
    project_leader: string;
    start_date: Date;
    deadline: Date;
    current_status: string;
    frontend: string;
    backend: string;
    ddbb: string;
}

function Dashboard() {
    const [bugArray, setBugArray] = useState<BugInterface[]>([]);
    const [projectArray, setProjectArray] = useState<ProjectInterface[]>([]);
    const [userData, setUserData] = useState({ username: '' });
    const location = useLocation();

    useEffect(() => {
        const promiseForBugs = axios.get(bugs_URL, { withCredentials: true });
        const promiseForProjects = axios.get(projects_URL, { withCredentials: true });
        const promiseForUsername = axios.get(userNameURL, { withCredentials: true });

        Promise.all([promiseForBugs, promiseForProjects, promiseForUsername])
        .then(res => {
            setBugArray(res[0].data);
            setProjectArray(res[1].data);
            setUserData(res[2].data);
        });
    }, []);

    const calculatePendingBugs = () => {
        const pendingBugsArray = bugArray.filter(bug => bug.current_status === 'Pending');
        const totalBugs = bugArray.length;
        const pendingBugs = pendingBugsArray.length;
        return { totalBugs, pendingBugs };
    };

    return(
        <CustomPaper elevation={0}>
            <Typography
            variant='h5' 
            sx={{marginLeft: '20px', paddingTop: '25px'}}>
                {
                    location.search === '?new=1' ? 
                    `Welcome ${userData.username}!` :
                    location.search === '?new=0' ? 
                    `Welcome back ${userData.username}!` : null
                }
            </Typography>
            <DoughnutChart bugData={calculatePendingBugs()} />
        </CustomPaper>
    )
}

export default Dashboard;