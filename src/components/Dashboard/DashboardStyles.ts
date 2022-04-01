import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import ArticleIcon from '@mui/icons-material/Article';
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
    justifyContent: 'space-around'
});

export const TotalsContainer = styled(Box)({
    display: 'flex'
});

export const TotalsBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    maxWidth: '250px',
    borderRadius: '5px',
    backgroundColor: '#e30f00',
    boxShadow: `0px 1px 2px 0px rgba(60, 64, 67, 0.3),
                0px 1px 3px 1px rgba(60, 64, 67, 0.15)`,
    '&:nth-of-type(1)': {
        marginLeft: '20px',
        marginRight: '10px'
    }
});

export const Totals = styled(Box)({

});

export const TotalsTitle = styled(Typography)({
    color: '#efefef'
});

export const TotalsData = styled(Typography)({
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
    color: '#990a00'
});