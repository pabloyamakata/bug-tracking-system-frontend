import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ArticleIcon from '@mui/icons-material/Article';
import PestControlIcon from '@mui/icons-material/PestControl';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BarChartIcon from '@mui/icons-material/BarChart';
import { styled } from '@mui/material';

export const CustomPaper = styled(Paper)({
    minHeight: '100vh',
    paddingTop: '65px',
    paddingBottom: '30px',
    borderRadius: 0,
    '@media (max-width: 599px)': {
        paddingTop: '58px'
    },
    '@media (min-width: 600px) and (max-width: 899px)': {
        paddingTop: '64px'
    }
});

export const DashboardGreeting = styled(Typography)(({ theme }) => ({
    marginLeft: '30px',
    paddingTop: '40px',
    paddingRight: '30px',
    fontWeight: '700',
    color: theme.palette.mode === 'dark' ? 'rgba(237, 237, 237, .85)' : theme.palette.text.primary
}));

export const ChartContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    paddingTop: '30px',
    '@media (min-width: 1239px)': {
        justifyContent: 'space-around',
        padding: '30px 20px 0'
    },
    '@media (min-width: 1320px)': {
        justifyContent: 'space-between',
        padding: '30px 10px 0'
    }
});

export const StatBoxWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
});

export const StatBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '200px',
    height: '220px',
    margin: '10px',
    borderRadius: '16px',
    border: theme.palette.mode === 'dark' ? '1px solid rgb(255, 99, 132)' : '1px solid rgba(183, 33, 54, .3)',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 99, 132, 0.2)' : 'rgb(255, 231, 217)',
    '&:nth-of-type(2)': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(85, 194, 81, 0.2)' : 'rgb(200, 250, 205)',
        border: theme.palette.mode === 'dark' ? '1px solid rgb(85, 194, 81)' : '1px solid rgba(0, 123, 85, .3)'
    },
    '&:nth-of-type(3)': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(75, 192, 192, 0.2)' : 'rgb(208, 242, 255)',
        border: theme.palette.mode === 'dark' ? '1px solid rgb(75, 192, 192)' : '1px solid rgba(12, 83, 183, .3)'
    },
    '&:nth-of-type(4)': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 205, 86, 0.2)' : 'rgb(255, 247, 205)',
        border: theme.palette.mode === 'dark' ? '1px solid rgb(255, 205, 86)' : '1px solid rgba(183, 129, 3, .3)'
    },
    '&:nth-of-type(5)': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(153, 102, 255, 0.2)' : 'rgb(243, 217, 255)',
        border: theme.palette.mode === 'dark' ? '1px solid rgb(153, 102, 255)' : '1px solid rgba(136, 0, 207, .3)'
    },
    '@media (max-width: 469px)': {
        width: '80%'
    },
    '@media (min-width: 560px) and (max-width: 690px)': {
        width: '40%'
    },
    '@media (min-width: 800px) and (max-width: 859px)': {
        width: '28%'
    },
    '@media (min-width: 860px) and (max-width: 1079px)': {
        width: '28%'
    },
    '@media (min-width: 1080px) and (max-width: 1319px)': {
        width: '30%'
    }
}));

export const BugReportsTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgb(255, 99, 132)' : 'rgb(122, 12, 46)',
    fontSize: '14px',
    textAlign: 'center'
}));

export const ProjectReportsTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgb(85, 194, 81)' : 'rgb(0, 82, 73)',
    fontSize: '14px',
    textAlign: 'center'
}));

export const BugsReportedTodayTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgb(75, 192, 192)' : 'rgb(4, 41, 122)',
    fontSize: '14px',
    textAlign: 'center'
}));

export const ProjectsReportedTodayTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgb(255, 205, 86)' : 'rgb(122, 79, 1)',
    fontSize: '14px',
    textAlign: 'center'
}));

export const LastMonthResolutionRateTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgb(153, 102, 255)' : 'rgb(93, 0, 140)',
    fontSize: '14px',
    textAlign: 'center'
}));

export const CurrentMonthResolutionRateTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgb(255, 99, 132)' : 'rgb(122, 12, 46)',
    fontSize: '14px',
    textAlign: 'center'
}));

export const BugReports = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    fontWeight: 'bold',
    color: theme.palette.mode === 'dark' ? 'rgb(255, 99, 132)' : 'rgb(122, 12, 46)',
    textAlign: 'center'
}));

export const ProjectReports = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    fontWeight: 'bold',
    color: theme.palette.mode === 'dark' ? 'rgb(85, 194, 81)' : 'rgb(0, 82, 73)',
    textAlign: 'center'
}));

export const BugsReportedToday = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    fontWeight: 'bold',
    color: theme.palette.mode === 'dark' ? 'rgb(75, 192, 192)' : 'rgb(4, 41, 122)',
    textAlign: 'center'
}));

export const ProjectsReportedToday = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    fontWeight: 'bold',
    color: theme.palette.mode === 'dark' ? 'rgb(255, 205, 86)' : 'rgb(122, 79, 1)',
    textAlign: 'center'
}));

export const LastMonthResolutionRate = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    fontWeight: 'bold',
    color: theme.palette.mode === 'dark' ? 'rgb(153, 102, 255)' : 'rgb(93, 0, 140)',
    textAlign: 'center'
}));

export const CurrentMonthResolutionRate = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    fontWeight: 'bold',
    color: theme.palette.mode === 'dark' ? 'rgb(255, 99, 132)' : 'rgb(122, 12, 46)',
    textAlign: 'center'
}));

export const IconBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '64px',
    height: '64px',
    marginBottom: '24px',
    borderRadius: '50%'
});

export const BugIcon = styled(PestControlIcon)(({ theme }) => ({
    fontSize: '30px',
    color: theme.palette.mode === 'dark' ? 'rgb(255, 99, 132)' : 'rgb(183, 33, 54)'
}));

export const ProjectIcon = styled(ArticleIcon)(({ theme }) => ({
    fontSize: '30px',
    color: theme.palette.mode === 'dark' ? 'rgb(85, 194, 81)' : 'rgb(0, 123, 85)'
}));

export const WarningSignIcon = styled(ReportProblemIcon)(({ theme }) => ({
    fontSize: '30px',
    color: theme.palette.mode === 'dark' ? 'rgb(75, 192, 192)' : 'rgb(12, 83, 183)'
}));

export const CheckIcon = styled(CheckCircleIcon)(({ theme }) => ({
    fontSize: '35px',
    color: theme.palette.mode === 'dark' ? 'rgb(255, 205, 86)' : 'rgb(183, 129, 3)'
}));

export const MagnifyingGlassIcon = styled(QueryStatsIcon)(({ theme }) => ({
    fontSize: '35px',
    color: theme.palette.mode === 'dark' ? 'rgb(153, 102, 255)' : 'rgb(136, 0, 207)'
}));

export const ChartIcon = styled(BarChartIcon)(({ theme }) => ({
    fontSize: '35px',
    color: theme.palette.mode === 'dark' ? 'rgb(255, 99, 132)' : 'rgb(122, 12, 46)'
}));