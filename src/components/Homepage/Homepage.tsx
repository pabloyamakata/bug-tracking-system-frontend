import { useNavigate } from 'react-router-dom';
import homepage_logo from '../../assets/homepage-logo.png';

import {
    HomeContainer,
    Header,
    Logo,
    LogoTitle,
    ContentWrapper,
    Title,
    Subtitle,
    Description,
    ButtonGroup,
    Btn
} from './HomepageStyles';

import Box from '@mui/material/Box';

function Homepage() {
    const navigate = useNavigate();
    const openGitHubRepo = () => {
        window.open('https://github.com/pabloyamakata/bug-tracking-system-frontend', 'new');
    };
    return(
        <HomeContainer>
            <Header>
                {/* Attribute to <a href="https://www.flaticon.com/free-icons/malware" title="malware icons">Malware icons created by Freepik - Flaticon</a> */}
                <Logo src={homepage_logo} alt="Homepage logo" />
                <LogoTitle>BugFlix</LogoTitle>
            </Header>
            <ContentWrapper>
                <Title>Fix Bugs Easily</Title>
                <Subtitle>Deliver Products On Time</Subtitle>
                <Description>BugFlix is a free web-based bug tracking system that allows developers to monitor bugs during software development. Start by adding your first project and then report bugs as needed</Description>
                <ButtonGroup>
                    <Btn onClick={openGitHubRepo}>Github</Btn>
                    <Btn onClick={() => navigate('/login')}>Get Started</Btn>
                </ButtonGroup>
            </ContentWrapper>
            <Box sx={{width: '100vw', height: '40px', border: '1px solid black' }}></Box>
        </HomeContainer>
    )
}

export default Homepage;