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
    width: '100vw',
    height: '40px',
    padding: '0 40px',
    color: '#FAFAFA',
    backgroundColor: '#20232A'
});

export const Copyright = styled(Typography)({
    fontWeight: '200',
    fontSize: '13px'
});