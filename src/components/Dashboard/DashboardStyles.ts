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

export const DashboardGreeting = styled(Typography)({
    marginLeft: '30px',
    paddingTop: '40px',
    fontWeight: '700'
});

export const ChartContainer = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: '45px'
});

export const StatContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '100vw',
    paddingTop: '20px'
});

export const StatBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '225px',
    height: '238px',
    borderRadius: '16px',
    backgroundColor: 'rgb(255, 231, 217)',
    boxShadow: `0px 0.0625em 0.0625em rgba(0, 0, 0, 0.25),
                    0px 0.125em 0.5em rgba(0, 0, 0, 0.25),
                        0px 0px 0px 1px inset rgba(255, 255, 255, 0.1)`,

    '&:nth-of-type(2)': {
        backgroundColor: 'rgb(200, 250, 205)'
    },
    '&:nth-of-type(3)': {
        backgroundColor: 'rgb(208, 242, 255)'
    },
    '&:nth-of-type(4)': {
        backgroundColor: 'rgb(255, 247, 205)'
    },
    '&:nth-of-type(5)': {
        backgroundColor: 'rgb(243, 217, 255)'
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

export const PlaceholderTitle = styled(Typography)({
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

export const Placeholder = styled(Typography)({
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

export const FifthIcon = styled(QueryStatsIcon)({
    fontSize: '35px',
    color: 'rgb(136, 0, 207)'
});