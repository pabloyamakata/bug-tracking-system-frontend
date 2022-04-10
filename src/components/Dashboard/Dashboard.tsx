import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';

import DoughnutChart from '../Charts/DoughnutChart/DoughnutChart';
import PieChart from '../Charts/PieChart/PieChart';
import BarChart from '../Charts/BarChart/BarChart';

import Box from '@mui/material/Box';

import {
    CustomPaper,
    DashboardGreeting,
    ChartContainer,
    StatContainer,
    StatBox,
    TotalBugsTitle,
    TotalProjectsTitle,
    BugsReportedTodayTitle,
    EfficiencyRateTitle,
    TotalBugs,
    TotalProjects,
    BugsReportedToday,
    EfficiencyRate,
    IconBox,
    BugWithFlowerIcon,
    ProjectIcon,
    BugIcon,
    EfficiencyRateIcon
} from './DashboardStyles';

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
    initial_date: string;
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

    const calculateBugsByStatus = () => {
        const bugsByStatus = {
            pendingBugs: bugArray.filter(bug => bug.current_status === 'Pending').length,
            solvedBugs: bugArray.filter(bug => bug.current_status === 'Solved').length,
            closedBugs: bugArray.filter(bug => bug.current_status === 'Closed').length
        };

        return bugsByStatus;
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

    const calculateBugsCreatedPerMonth = () => {
        const date = dayjs();
        const currentDate = date.format('DD/MM/YYYY').replace(/\//g, '-');
        const dateOneMonthAgo = date.subtract(1, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateTwoMonthsAgo = date.subtract(2, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateThreeMonthsAgo = date.subtract(3, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateFourMonthsAgo = date.subtract(4, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateFiveMonthsAgo = date.subtract(5, 'month').format('DD/MM/YYYY').replace(/\//g, '-');
        const dateSixMonthsAgo = date.subtract(6, 'month').format('DD/MM/YYYY').replace(/\//g, '-');

        const bugsCreatedPerMonth = {
            thisMonth: bugArray.filter(bug => formatDate(bug.initial_date).includes(currentDate.slice(3))).length,
            oneMonthAgo: bugArray.filter(bug => formatDate(bug.initial_date).includes(dateOneMonthAgo.slice(3))).length,
            twoMonthsAgo: bugArray.filter(bug => formatDate(bug.initial_date).includes(dateTwoMonthsAgo.slice(3))).length,
            threeMonthsAgo: bugArray.filter(bug => formatDate(bug.initial_date).includes(dateThreeMonthsAgo.slice(3))).length,
            fourMonthsAgo: bugArray.filter(bug => formatDate(bug.initial_date).includes(dateFourMonthsAgo.slice(3))).length,
            fiveMonthsAgo: bugArray.filter(bug => formatDate(bug.initial_date).includes(dateFiveMonthsAgo.slice(3))).length,
            sixMonthsAgo: bugArray.filter(bug => formatDate(bug.initial_date).includes(dateSixMonthsAgo.slice(3))).length
        };
        
        return bugsCreatedPerMonth;
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

    const calculateBugsByPriority = () => {
        const bugsByPriority = {
            criticalPriorityBugs: bugArray.filter(bug => bug.priority_level === 'Critical' && bug.current_status === 'Pending').length,
            highPriorityBugs: bugArray.filter(bug => bug.priority_level === 'High' && bug.current_status === 'Pending').length,
            mediumPriorityBugs: bugArray.filter(bug => bug.priority_level === 'Medium' && bug.current_status === 'Pending').length,
            lowPriorityBugs: bugArray.filter(bug => bug.priority_level === 'Low' && bug.current_status === 'Pending').length
        };

        return bugsByPriority;
    };

    const calculateBugsReportedToday = () => {
        
    };

    return(
        <CustomPaper elevation={0}>
            {location.search === '?new=1' ? 
            <DashboardGreeting variant='h5'>{`Welcome ${userData.username}!`}</DashboardGreeting>
            : location.search === '?new=0' ?
            <DashboardGreeting variant='h5'>{`Welcome back ${userData.username}!`}</DashboardGreeting>
            : null}

            <StatContainer sx={{ paddingTop: !location.search ? '60px' : '40px' }}>
                <StatBox>
                    <IconBox
                    sx={{
                        backgroundImage: 'linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)'
                    }}>
                        <BugWithFlowerIcon />
                    </IconBox>
                    <Box>
                        <TotalBugs>{bugArray.length}</TotalBugs>
                        <TotalBugsTitle>Total Bugs</TotalBugsTitle>
                    </Box>
                </StatBox>
                <StatBox>
                    <IconBox
                    sx={{
                        backgroundImage: 'linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)'
                    }}>
                        <ProjectIcon />
                    </IconBox>
                    <Box>
                        <TotalProjects>{projectArray.length}</TotalProjects>
                        <TotalProjectsTitle>Total Projects</TotalProjectsTitle>
                    </Box>
                </StatBox>
                <StatBox>
                    <IconBox
                    sx={{
                        backgroundImage: 'linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)'
                    }}>
                        <BugIcon />
                    </IconBox>
                    <Box>
                        <BugsReportedToday>{projectArray.length}</BugsReportedToday>
                        <BugsReportedTodayTitle>Bugs Reported Today</BugsReportedTodayTitle>
                    </Box>
                </StatBox>
                <StatBox>
                    <IconBox
                    sx={{
                        backgroundImage: 'linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)'
                    }}>
                        <EfficiencyRateIcon />
                    </IconBox>
                    <Box>
                        <EfficiencyRate>{projectArray.length}</EfficiencyRate>
                        <EfficiencyRateTitle>Efficiency Rate</EfficiencyRateTitle>
                    </Box>
                </StatBox>
            </StatContainer>
            
            <ChartContainer>
                
                <DoughnutChart bugsByStatus={calculateBugsByStatus()} />

                <PieChart bugsByPriority={calculateBugsByPriority()} />

                <BarChart
                bugsResolvedPerMonth={calculateBugsResolvedPerMonth()}
                bugsCreatedPerMonth={calculateBugsCreatedPerMonth()}
                nameOfMonths={getNameOfMonths()} />

            </ChartContainer>
        </CustomPaper>
    )
}

export default Dashboard;