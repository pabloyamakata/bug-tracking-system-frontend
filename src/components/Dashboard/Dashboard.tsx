import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';

import DoughnutChart from '../Charts/DoughnutChart/DoughnutChart';
import LineChart from '../Charts/LineChart/LineChart';

import { CustomPaper, DashboardGreeting, ChartContainer } from './DashboardStyles';

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
    final_date: string;
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

    const formatDate = (date: string) => {
        const dateIsArray = date.split('-');
        dateIsArray.reverse();
        const formattedDate = dateIsArray.join('-');
        return formattedDate;
    };

    const calculatePendingBugs = () => {
        const pendingBugs = bugArray.filter(bug => bug.current_status === 'Pending').length;
        return pendingBugs;
    };

    const calculateClosedBugs = () => {
        const closedBugs = bugArray.filter(bug => bug.current_status === 'Closed').length;
        return closedBugs;
    };

    const calculateBugsResolvedPerMonth = () => {
        const date = dayjs();
        const currentDate = date.format('DD/MM/YYYY').replace(/\//g, '-');
        const dateOneMonthAgo = date.subtract(1, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateTwoMonthsAgo = date.subtract(2, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateThreeMonthsAgo = date.subtract(3, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateFourMonthsAgo = date.subtract(4, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateFiveMonthsAgo = date.subtract(5, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateSixMonthsAgo = date.subtract(6, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        
        const totalBugsResolved = bugArray.filter(bug => bug.current_status === 'Solved');

        const bugsResolvedPerMonth = {
            thisMonth: totalBugsResolved.filter(bug => formatDate(bug.final_date).includes(currentDate.slice(3))).length,
            oneMonthAgo: totalBugsResolved.filter(bug => formatDate(bug.final_date).includes(dateOneMonthAgo.slice(3))).length,
            twoMonthsAgo: totalBugsResolved.filter(bug => formatDate(bug.final_date).includes(dateTwoMonthsAgo.slice(3))).length,
            threeMonthsAgo: totalBugsResolved.filter(bug => formatDate(bug.final_date).includes(dateThreeMonthsAgo.slice(3))).length,
            fourMonthsAgo: totalBugsResolved.filter(bug => formatDate(bug.final_date).includes(dateFourMonthsAgo.slice(3))).length,
            fiveMonthsAgo: totalBugsResolved.filter(bug => formatDate(bug.final_date).includes(dateFiveMonthsAgo.slice(3))).length,
            sixMonthsAgo: totalBugsResolved.filter(bug => formatDate(bug.final_date).includes(dateSixMonthsAgo.slice(3))).length
        };
        
        return bugsResolvedPerMonth;
    };

    const getNameOfMonths = () => {
        const date = dayjs();
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const nameOfMonths = {
            currentMonth: months[date.month()],
            oneMonthAgo: months[date.subtract(1, 'month').month()],
            twoMonthsAgo: months[date.subtract(2, 'month').month()],
            threeMonthsAgo: months[date.subtract(3, 'month').month()],
            fourMonthsAgo: months[date.subtract(4, 'month').month()],
            fiveMonthsAgo: months[date.subtract(5, 'month').month()],
            sixMonthsAgo: months[date.subtract(6, 'month').month()]
        };

        return nameOfMonths;
    };

    return(
        <CustomPaper elevation={0}>
            {location.search === '?new=1' ? 
            <DashboardGreeting variant='h5'>{`Welcome ${userData.username}!`}</DashboardGreeting>
            : location.search === '?new=0' ?
            <DashboardGreeting variant='h5'>{`Welcome back ${userData.username}!`}</DashboardGreeting>
            : null}
            
            <ChartContainer>
                
                <DoughnutChart
                totalBugs={bugArray.length}
                pendingBugs={calculatePendingBugs()}
                closedBugs={calculateClosedBugs()} />

                <LineChart
                bugsResolvedPerMonth={calculateBugsResolvedPerMonth()}
                nameOfMonths={getNameOfMonths()} />

            </ChartContainer>
        </CustomPaper>
    )
}

export default Dashboard;