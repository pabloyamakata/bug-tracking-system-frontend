import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

import bg_login from '../../assets/bg-login.jpg';

export const MainContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundImage: `url(${bg_login})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
});

export const LoginForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
    height: '400px',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    borderRadius: '7px'
});

export const Title = styled(Typography)(({ theme }) => ({
    marginBottom: '30px',
    fontSize: '24px',
    color: theme.palette.secondary.contrastText
}));

export const LoginTextField = styled(TextField)(({ theme }) => ({
    width: '90%',
    maxWidth: '300px',
    '.MuiOutlinedInput-input': {
        color: theme.palette.secondary.contrastText
    },
    '.MuiInputLabel-root': {
        color: theme.palette.secondary.contrastText
    },
    '&:nth-of-type(2)': {
        marginTop: '15px'
    },
    '.MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgba(250, 250, 250, .5)',
          transition: '.1s ease'
        },
        '&:hover fieldset': {
          borderWidth: '2px',
          borderColor: theme.palette.primary.main
        }
    }
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
    alignSelf: 'flex-end',
    width: '100px',
    marginTop: '20px',
    marginRight: '50px',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    textTransform: 'capitalize',
    transition: '.1s ease',
    '&:hover': {
        transform: 'scale(1.03)'
    },
    '@media (max-width: 440px)': {
        width: '90%',
        maxWidth: '300px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));

export const RegistrationLink = styled(Typography)({
    marginTop: '20px',
    color: '#ffffff',
    '@media (max-width: 270px)': {
        fontSize: '13px',
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    '@media (min-width: 271px) and (max-width: 300px)': {
        fontSize: '14px'    
    }
});

