import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';

export const CustomNavbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark
}));
