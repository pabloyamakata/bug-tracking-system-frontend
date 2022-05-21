import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

export const DoughnutBox = styled(Box)({
    position: 'relative',
    width: '90%',
    maxWidth: '400px',
    margin: '15px',
    paddingTop: '10px',
    paddingBottom: '15px',
    borderRadius: '16px',
    boxShadow: `0px 0.0625em 0.0625em rgba(0, 0, 0, 0.25),
                0px 0.125em 0.5em rgba(0, 0, 0, 0.25),
                0px 0px 0px 1px inset rgba(255, 255, 255, 0.1)`,
    '@media (min-width: 650px)': {
        width: '43%'
    },
    '@media (min-width: 990px) and (max-width: 1019px)': {
        margin: '15px 35px 15px 15px'
    },
    '@media (min-width: 1020px) and (max-width: 1059px)': {
        margin: '15px 50px 15px 15px'
    },
    '@media (min-width: 1060px) and (max-width: 1099px)': {
        margin: '15px 60px 15px 15px'
    },
    '@media (min-width: 1100px) and (max-width: 1139px)': {
        margin: '15px 80px 15px 15px'
    },
    '@media (min-width: 1140px)': {
        width: '300px',
        height: '325px'
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