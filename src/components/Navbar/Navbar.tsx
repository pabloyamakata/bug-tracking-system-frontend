import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { CustomNavbar, CustomSwitch, CustomAvatar } from './NavbarStyles';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const logoutURL = 'https://bug-tracking-system-backend.000webhostapp.com/logout.php';
const userNameURL = 'https://bug-tracking-system-backend.000webhostapp.com/username.php';

const pages = ['Dashboard', 'New Bug', 'New Project', 'Bug Reports', 'Project Reports'];
const settings = ['Logout'];

interface ThemeModeProps {
    isModeDark: boolean;
    setIsModeDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({isModeDark, setIsModeDark}: ThemeModeProps) {
    const [userData, setUserData] = useState({ username: '' });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(userNameURL, { withCredentials: true })
        .then(res => setUserData(res.data));
    }, []);

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const getInitial = () => {
        const initial = userData.username.charAt(0).toUpperCase();
        return initial;
    };
    const changeThemeMode = () => {
        setIsModeDark(!isModeDark);
    };
    const handleLogout = () => {
        axios({
            method: 'get',
            url: logoutURL,
            withCredentials: true
        })
        .then(res => {
            res.data.status && navigate('/login');
        });
    };
    return(
        <CustomNavbar>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{ color: '#ffffff', mr: 2, display: { xs: 'none', md: 'flex' } }}>
                    Bug Tracker
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size='large'
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleOpenNavMenu}
                        sx={{ color: '#ffffff' }}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                        id='menu-appbar'
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                        display: { xs: 'block', md: 'none' },
                        }}>
                            {pages.map((page) => (
                                <MenuItem 
                                key={page}
                                component={Link} 
                                to={`/${page.toString().toLowerCase().replace(/ /g, '')}`} 
                                onClick={handleCloseNavMenu}>
                                    {page}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    
                    <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{ color: '#ffffff', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    Bug Tracker
                    </Typography>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                            key={page}
                            component={Link}
                            sx={{
                                display: 'block',
                                my: 2,
                                color: 'white',
                                fontWeight: '300',
                                textTransform: 'capitalize'
                            }}
                            to={`/${page.toString().toLowerCase().replace(/ /g, '')}`}
                            onClick={handleCloseNavMenu}>
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <CustomSwitch
                    onClick={changeThemeMode} />
                        
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='Open settings'>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <CustomAvatar>
                                    {getInitial()}
                                </CustomAvatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id='menu-appbar'
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}>
                            {settings.map((setting) => (
                                <MenuItem 
                                key={setting} 
                                onClick={() => {
                                    handleCloseUserMenu();
                                    handleLogout();
                                }}>
                                    <Typography textAlign='center'>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </CustomNavbar>
    )
}

export default Navbar;