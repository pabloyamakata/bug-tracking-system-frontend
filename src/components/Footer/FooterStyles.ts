import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

export const FooterContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    zIndex: '20',
    width: '100%',
    height: '40px',
    padding: '0 40px',
    color: '#FAFAFA',
    backgroundColor: '#20232A',
    '@media (max-width: 350px)': {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '75px'
    },
    '@media (max-width: 400px)': {
        padding: '0 20px'
    }
});

export const Copyright = styled(Typography)({
    fontWeight: '200',
    fontSize: '13px'
});