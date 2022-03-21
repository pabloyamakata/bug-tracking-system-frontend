import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { styled } from '@mui/material';

export const CustomPaper = styled(Paper)({
    minHeight: '100vh',
    paddingTop: '68px',
    borderRadius: 0,
    '@media (max-width: 599px)': {
        paddingTop: '58px'
    },
    '@media (min-width: 600px) and (max-width: 899px)': {
        paddingTop: '64px'
    }
});

export const CustomTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.secondary.contrastText
    }
}));

export const MessageContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '75vh'
});

export const LoaderContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '85vh'
});

export const LoadingIcon = styled(HourglassEmptyIcon)({
    fontSize: 80,
    animation: 'spin 1.5s linear infinite',
    '@keyframes spin': {
        '33.33%': {
            transform: 'rotate(.1turn)'
        },
        '66.66%': {
            transform: 'rotate(-0.1turn)'
        },
        '100%': {
            transform: 'rotate(0)'
        }
    }
});