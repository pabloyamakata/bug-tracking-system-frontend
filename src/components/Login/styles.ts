import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

import background from '../../assets/bg-login.jpg';

export const MainContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
});

export const LoginContainer = styled(Box)({
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

export const Title = styled(Typography)({
    marginBottom: '30px',
    fontSize: '24px',
    color: 'var(--primary-color)'
});

export const LoginTextField = styled(TextField)({
    width: '90%',
    maxWidth: '300px',
    '& .MuiOutlinedInput-input': {
        color: 'var(--primary-color)'
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(250, 250, 250, .7)'
    },
    '& .MuiOutlinedInput-notchedOutline': {
        color: 'var(--secondary-color)'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgba(250, 250, 250, .5)',
          transition: '.1s ease'
        },
        '&:hover fieldset': {
          border: '2px solid var(--secondary-color)'
        }},
    '&:nth-of-type(2)': {
        marginTop: '15px'
    }
});

export const SubmitButton = styled(Button)({
    alignSelf: 'flex-end',
    width: '100px',
    marginTop: '20px',
    marginRight: '50px',
    color: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'var(--secondary-color)',
    textTransform: 'capitalize',
    transition: '.1s ease',
    '&:hover': {
        backgroundColor: 'var(--secondary-color)',
        transform: 'scale(1.03)'
    },
    '@media (max-width: 440px)': {
        width: '90%',
        maxWidth: '300px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

