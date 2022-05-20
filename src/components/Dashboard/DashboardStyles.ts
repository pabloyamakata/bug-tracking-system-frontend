import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ArticleIcon from '@mui/icons-material/Article';
import PestControlIcon from '@mui/icons-material/PestControl';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
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
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: '45px'
});

export const StatBoxWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
});

export const StatBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '200px',
    height: '220px',
    margin: '10px',
    borderRadius: '16px',
    border: '1px solid rgba(183, 33, 54, .3)',
    backgroundColor: 'rgb(255, 231, 217)',
    '&:nth-of-type(2)': {
        backgroundColor: 'rgb(200, 250, 205)',
        border: '1px solid rgba(0, 123, 85, .3)'
    },
    '&:nth-of-type(3)': {
        backgroundColor: 'rgb(208, 242, 255)',
        border: '1px solid rgba(12, 83, 183, .3)'
    },
    '&:nth-of-type(4)': {
        backgroundColor: 'rgb(255, 247, 205)',
        border: '1px solid rgba(183, 129, 3, .3)'
    },
    '&:nth-of-type(5)': {
        backgroundColor: 'rgb(243, 217, 255)',
        border: '1px solid rgba(136, 0, 207, .3)'
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
});

export const BugReportsTitle = styled(Typography)({
    color: 'rgb(122, 12, 46)',
    fontSize: '14px',
    textAlign: 'center'
});

export const ProjectReportsTitle = styled(Typography)({
    color: 'rgb(0, 82, 73)',
    fontSize: '14px',
    textAlign: 'center'
});

export const BugsReportedTodayTitle = styled(Typography)({
    color: 'rgb(4, 41, 122)',
    fontSize: '14px',
    textAlign: 'center'
});

export const ProjectsReportedTodayTitle = styled(Typography)({
    color: 'rgb(122, 79, 1)',
    fontSize: '14px',
    textAlign: 'center'
});

export const ResolutionRateTitle = styled(Typography)({
    color: 'rgb(93, 0, 140)',
    fontSize: '14px',
    textAlign: 'center'
});

export const BugReports = styled(Typography)({
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'rgb(122, 12, 46)',
    textAlign: 'center'
});

export const ProjectReports = styled(Typography)({
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'rgb(0, 82, 73)',
    textAlign: 'center'
});

export const BugsReportedToday = styled(Typography)({
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'rgb(4, 41, 122)',
    textAlign: 'center'
});

export const ProjectsReportedToday = styled(Typography)({
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'rgb(122, 79, 1)',
    textAlign: 'center'
});

export const ResolutionRate = styled(Typography)({
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'rgb(93, 0, 140)',
    textAlign: 'center'
});

export const IconBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '64px',
    height: '64px',
    marginBottom: '24px',
    borderRadius: '50%'
});

export const BugIcon = styled(PestControlIcon)({
    fontSize: '30px',
    color: 'rgb(183, 33, 54)'
});

export const ProjectIcon = styled(ArticleIcon)({
    fontSize: '30px',
    color: 'rgb(0, 123, 85)'
});

export const WarningSignIcon = styled(ReportProblemIcon)({
    fontSize: '30px',
    color: 'rgb(12, 83, 183)'
});

export const CheckIcon = styled(CheckCircleIcon)({
    fontSize: '35px',
    color: 'rgb(183, 129, 3)'
});

export const MagnifyingGlassIcon = styled(QueryStatsIcon)({
    fontSize: '35px',
    color: 'rgb(136, 0, 207)'
});