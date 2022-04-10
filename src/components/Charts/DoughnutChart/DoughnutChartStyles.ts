import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

export const DoughnutBox = styled(Box)({
    position: 'relative',
    width: '97%',
    maxWidth: '300px',
    maxHeight: '325px',
    paddingTop: '10px',
    paddingBottom: '15px',
    borderRadius: '16px',
    boxShadow: `0px 1px 2px 0px rgba(60, 64, 67, 0.3),
                0px 1px 3px 1px rgba(60, 64, 67, 0.15)`
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