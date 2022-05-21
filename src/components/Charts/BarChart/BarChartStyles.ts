import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

export const BarBox = styled(Box)({
    position: 'relative',
    width: '90%',
    minHeight: '300px',
    margin: '15px',
    padding: '10px',
    borderRadius: '16px',
    boxShadow: `0px 0.0625em 0.0625em rgba(0, 0, 0, 0.25),
                0px 0.125em 0.5em rgba(0, 0, 0, 0.25),
                0px 0px 0px 1px inset rgba(255, 255, 255, 0.1)`,
    '@media (min-width: 950px)': {
        marginTop: '30px'
    },
    '@media (min-width: 1140px)': {
        width: '37%',
        height: '325px',
        marginTop: '15px'
    },
    '@media (min-width: 1239px)': {
        flexGrow: 1
    }
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