import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

export const BarBox = styled(Box)({
    position: 'relative',
    width: '97%',
    maxWidth: '640px',
    maxHeight: '360px',
    padding: '10px',
    borderRadius: '16px',
    boxShadow: `0px 0px 0px 3px rgba(3, 102, 214, 0.3)`
});

export const ChartMessage = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '20px',
    color: theme.palette.mode === 'dark' ? '#888' : theme.palette.info.main,
    textAlign: 'center'
}));