import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

export const CustomPaper = styled(Paper)({
    minHeight: '100vh',
    paddingTop: '65px',
    paddingBottom: '100px',
    borderRadius: 0,
    '@media (max-width: 350px)': {
        paddingBottom: '140px'
    },
    '@media (max-width: 599px)': {
        paddingTop: '58px'
    },
    '@media (min-width: 600px) and (max-width: 899px)': {
        paddingTop: '64px'
    }
});

export const CustomGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '20px',
    paddingRight: '20px'
});

export const CustomTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    maxWidth: '500px',
    marginTop: '40px',
    colorScheme: theme.palette.mode === 'dark' ? 'dark' : 'light'
}));

export const ButtonContainer = styled(Box)({
    width: '100%',
    maxWidth: '500px',
    marginTop: '40px'
});

export const CustomButton = styled(Button)(({ theme }) => ({
    width: '90px',
    textTransform: 'capitalize',
    backgroundColor: theme.palette.primary.main,
    '&:nth-of-type(2)': {
        marginLeft: '20px',
        color: theme.palette.grey[50],
        backgroundColor: theme.palette.secondary.main,
        transition: '.3s ease'
    },
    '&:nth-of-type(2):hover': {
        backgroundColor: theme.palette.secondary.dark
    }
}));

export const SuccessMessage = styled(Typography)(({ theme }) => ({
    marginBottom: '10px',
    color: theme.palette.success.main
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
    marginBottom: '10px',
    color: theme.palette.error.main
}));