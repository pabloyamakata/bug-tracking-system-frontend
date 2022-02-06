import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

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

export const CustomButton = styled(Button)({
    width: '64px',
    textTransform: 'capitalize',
    '&:nth-of-type(2)': {
        marginLeft: '20px',
        color: 'var(--primary-color)',
        backgroundColor: 'rgba(35, 35, 35, 1)'
    }
});