import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';

import bg_registration from '../../assets/bg-registration.jpg';

export const MainWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundImage: `url(${bg_registration})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
});

export const RegistrationForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignIntems: 'center',
    width: '100%',
    maxWidth: '380px',
    height: 'auto',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, .6)',
    borderRadius: '7px'
});

export const RegistrationField = styled(TextField)(({ theme }) => ({
    '.MuiOutlinedInput-input': {
        color: theme.palette.secondary.contrastText
    },
    '.MuiInputLabel-root': {
        color: theme.palette.secondary.contrastText
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
    },
    '&:nth-of-type(2)': {
        marginTop: '20px'
    }
}));
