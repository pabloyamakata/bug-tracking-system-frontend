import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
    justifyContent: 'center'
});