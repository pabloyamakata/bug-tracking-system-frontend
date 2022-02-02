import Box from "@mui/material/Box";
import { styled } from '@mui/material';

// Better find out how to use import statement!
const background = require('../../images/bg-login.jpg'); 

export const CustomBox = styled(Box)({
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
});

