import { useNavigate } from 'react-router-dom';

import {
    HomeContainer,
    Header,
    LogoContainer,
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
                {/* SVG Logo */}
                <LogoContainer>
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="48" height="48" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_0_2" transform="scale(0.0208333)"/>
                            </pattern>
                            <image id="image0_0_2" width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA1LTI3PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmQ0MGVhZmZjLTc2N2YtNDk2MC05Nzg3LTIyNmI0ZDBkMTk1ZDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5QYWJsbyBZYW1ha2F0YTwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29s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"/>
                        </defs>
                    </svg>
                </LogoContainer>
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