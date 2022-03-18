import AppBar from '@mui/material/AppBar';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
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

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
    color: theme.palette.grey[700],
    backgroundColor: theme.palette.grey[300]
}));