import { useState, useEffect } from 'react';
import axios from 'axios';

import DoughnutChart from '../Charts/DoughnutChart';

import { CustomPaper } from './DashboardStyles';
import Typography from '@mui/material/Typography';

const bugs_URL = 'https://bug-tracking-system-backend.42web.io/bugs.php';
const projects_URL = 'https://bug-tracking-system-backend.42web.io/projects.php';
const userNameURL = 'https://bug-tracking-system-backend.42web.io/username.php';

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

    useEffect(() => {
        const promiseForBugs = axios.get(bugs_URL);
        const promiseForProjects = axios.get(projects_URL);
        const promiseForUsername = axios.get(userNameURL);

        Promise.all([promiseForBugs, promiseForProjects, promiseForUsername])
        .then(res => {
            setBugArray(res[0].data);
            setProjectArray(res[1].data);
            setUserData(res[2].data);
        });
    }, []);

    return(
        <CustomPaper elevation={0}>
            <Typography
            variant='h5' 
            sx={{marginLeft: '20px', paddingTop: '25px'}}>
                Welcome {userData.username}!
            </Typography>
            <DoughnutChart />
        </CustomPaper>
    )
}

export default Dashboard;