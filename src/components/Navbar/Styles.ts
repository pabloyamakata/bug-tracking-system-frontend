import AppBar from '@mui/material/AppBar';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material';

export const CustomNavbar = styled(AppBar)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.secondary.dark
}));

export const CustomSwitch = styled(Switch)({
    marginRight: '10px',
    '@media (max-width: 320px)': {
        marginRight: 0,
    }
});
