import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material';

export const CustomGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '20px',
    paddingRight: '20px'
});

export const CustomTextField = styled(TextField)({
    width: '100%',
    maxWidth: '500px',
    marginTop: '40px'
});