import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';

export const CustomNavbar = styled(AppBar)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.secondary.dark
}));
