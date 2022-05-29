import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {
    FooterContainer,
    Copyright
} from './FooterStyles';

function Footer() {
    const openMyGithub = () => {
        window.open('https://github.com/pabloyamakata', 'new');
    };
    const openMyLinkedIn = () => {
        window.open('https://www.linkedin.com/in/pabloyamakata/', 'new');
    };
    return(
        <FooterContainer>
            <Copyright>&copy; {new Date().getFullYear()} Developed by Pablo Yamakata</Copyright>
            <Stack direction='row' spacing={2}>
                <GitHubIcon sx={{ cursor: 'pointer' }} onClick={openMyGithub} />
                <LinkedInIcon sx={{ cursor: 'pointer' }} onClick={openMyLinkedIn} />
            </Stack>
        </FooterContainer>
    )
}

export default Footer;