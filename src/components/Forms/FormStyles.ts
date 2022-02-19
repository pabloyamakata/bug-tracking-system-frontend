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
    paddingBottom: '30px',
    borderRadius: 0,
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

export const CustomTextField = styled(TextField)({
    width: '100%',
    maxWidth: '500px',
    marginTop: '40px'
});

export const ButtonContainer = styled(Box)({
    width: '100%',
    maxWidth: '500px',
    marginTop: '40px'
});

export const CustomButton = styled(Button)(({ theme }) => ({
    width: '64px',
    textTransform: 'capitalize',
    '&:nth-of-type(2)': {
        marginLeft: '20px',
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.primary.contrastText
    }
}));

export const SuccessMessage = styled(Typography)({
    marginBottom: '10px',
    color: '#0fa311'
});