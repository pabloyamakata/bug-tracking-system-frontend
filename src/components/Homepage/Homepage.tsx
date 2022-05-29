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
    const openProjectRepo = () => {
        window.open('https://github.com/pabloyamakata/bug-tracking-system-frontend', 'new');
    };
    return(
        <HomeContainer>
            <Header>
                <Logo src={homepage_logo} alt="Homepage logo" />
                <LogoTitle>BugFlix</LogoTitle>
            </Header>
            <ContentWrapper>
                <Title>Fix Bugs Easily</Title>
                <Subtitle>Deliver Products On Time</Subtitle>
                <Description>BugFlix is a free web-based bug tracking system that allows developers to monitor bugs during software development. Start by adding your first project and then report bugs as needed</Description>
                <ButtonGroup>
                    <Btn onClick={openProjectRepo}>Github</Btn>
                    <Btn onClick={() => navigate('/login')}>Get Started</Btn>
                </ButtonGroup>
            </ContentWrapper>
            <Box sx={{ position: 'relative', width: '100vw', height: '40px' }} />
        </HomeContainer>
    )
}

export default Homepage;