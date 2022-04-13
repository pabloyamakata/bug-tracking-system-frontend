import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { styled } from '@mui/material';

export const CustomPaper = styled(Paper)({
    minHeight: '100vh',
    paddingTop: '68px',
    borderRadius: 0,
    '@media (max-width: 599px)': {
        paddingTop: '58px'
    },
    '@media (min-width: 600px) and (max-width: 899px)': {
        paddingTop: '64px'
    }
});

export const CustomTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.secondary.contrastText
    }
}));

export const MessageContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '75vh'
});

export const AddBoxIcon = styled(AddBoxOutlinedIcon)(({ theme }) => ({
    fontSize: 120,
    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'rgba(0, 0, 0, .54)'
}));