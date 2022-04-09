import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import ArticleIcon from '@mui/icons-material/Article';
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
    marginLeft: '20px',
    paddingTop: '25px',
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
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '100vw',
    paddingTop: '20px'
});

export const StatBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: '250px',
    minHeight: '100px',
    borderRadius: '5px',
    backgroundColor: 'rgb(255, 231, 217)',
    '&:nth-of-type(2)': {
        backgroundColor: 'rgb(200, 250, 205)'
    },
    '&:nth-of-type(3)': {
        backgroundColor: 'rgb(208, 242, 255)'
    },
    '&:nth-of-type(4)': {
        backgroundColor: 'rgb(255, 247, 205)'
    }
});

export const StatBody = styled(Box)({

});

export const TotalBugsTitle = styled(Typography)({
    color: 'rgb(122, 12, 46)'
});

export const TotalProjectsTitle = styled(Typography)({
    color: 'rgb(0, 82, 73)'
});

export const ReportedTodayTitle = styled(Typography)({
    color: 'rgb(4, 41, 122)'
});

export const EfficiencyRateTitle = styled(Typography)({
    color: 'rgb(122, 79, 1)'
});

export const TotalBugs = styled(Typography)({
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'rgb(122, 12, 46)'
});

export const TotalProjects = styled(Typography)({
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'rgb(0, 82, 73)'
});

export const ReportedToday = styled(Typography)({
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'rgb(4, 41, 122)'
});

export const EfficiencyRate = styled(Typography)({
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'rgb(122, 79, 1)'
});

export const BugIcon = styled(EmojiNatureIcon)({
    fontSize: '100px',
    color: 'rgb(183, 33, 54)'
});

export const ProjectIcon = styled(ArticleIcon)({
    fontSize: '100px',
    color: 'rgb(0, 123, 85)'
});

export const ThirdIcon = styled(QueryStatsIcon)({
    fontSize: '80px',
    color: 'rgb(12, 83, 183)'
});

export const FourthIcon = styled(ArticleIcon)({
    fontSize: '100px',
    color: 'rgb(183, 129, 3)'
});