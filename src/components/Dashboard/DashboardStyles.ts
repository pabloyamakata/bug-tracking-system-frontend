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
    paddingTop: '25px'
});

export const ChartContainer = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: '20px'
});

export const StatContainer = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
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
    backgroundColor: '#e30f00',
    boxShadow: `0px 1px 2px 0px rgba(60, 64, 67, 0.3),
                0px 1px 3px 1px rgba(60, 64, 67, 0.15)`,
    '&:nth-of-type(2)': {
        backgroundColor: '#018003'
    },
    '&:nth-of-type(3)': {
        backgroundColor: '#002b82'
    },
    '&:nth-of-type(4)': {
        backgroundColor: '#ef6c00'
    }
});

export const StatBody = styled(Box)({

});

export const StatName = styled(Typography)({
    color: '#efefef'
});

export const Stats = styled(Typography)({
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#efefef'
});

export const BugIcon = styled(EmojiNatureIcon)({
    fontSize: '100px',
    color: '#990a00'
});

export const ProjectIcon = styled(ArticleIcon)({
    fontSize: '100px',
    color: '#004701'
});

export const ThirdIcon = styled(QueryStatsIcon)({
    fontSize: '80px',
    color: '#00143b'
});

export const FourthIcon = styled(ArticleIcon)({
    fontSize: '100px',
    color: '#8f4700'
});