import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

export const ChartBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '97%',
    maxWidth: '300px',
    height: '400px',
    marginTop: '30px',
    marginLeft: '50px',
    padding: '15px 15px 40px 15px',
    borderRadius: '5px',
    boxShadow: '5px 6px 14px 4px rgba(0, 0, 0, .25)'
});

export const ChartTitle = styled(Typography)({
    fontSize: '25px',
    textAlign: 'center'
});