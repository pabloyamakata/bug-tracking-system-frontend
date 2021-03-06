import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

export const HomeContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100vh',
    '@media (max-width: 350px)': {
        paddingBottom: '100px'
    },
    '@media (min-width: 351px) and (max-width: 900px)': {
        paddingBottom: '60px'
    }
});

export const Header = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '90vw',
    height: '40px',
    paddingTop: '3rem',
    '@media (max-width: 520px)': {
        paddingLeft: '20px',
        paddingBottom: '50px'
    },
    '@media (min-width: 521px) and (max-width: 662px)': {
        paddingLeft: '50px',
        paddingBottom: '50px'
    },
    '@media (min-width: 663px) and (max-width: 900px)': {
        paddingLeft: '20px',
        paddingBottom: '50px'
    }
});

export const Logo = styled('img')({
    width: '32px'
});

export const LogoTitle = styled(Typography)({
    marginLeft: '10px',
    fontWeight: '600'
});

export const ContentWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
    '@media (min-width: 663px) and (max-width: 900px)': {
        paddingLeft: '80px',
        paddingRight: '80px'
    }
});

export const Title = styled(Typography)({
    color: '#111827',
    fontSize: '3.75rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '800',
    lineHeight: '.7',
    '@media (max-width: 520px)': {
        width: '100%',
        padding: '0 50px 20px',
        fontSize: '2.5rem',
        lineHeight: '1'
    },
    '@media (min-width: 521px) and (max-width: 662px)': {
        width: '100%',
        padding: '0 80px 20px',
        fontSize: '2.5rem',
        lineHeight: '1'
    },
    '@media (min-width: 663px) and (max-width: 900px)': {
        paddingBottom: '30px'
    }
});

export const Subtitle = styled(Typography)({
    color: '#4338CA',
    fontSize: '3.75rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '800',
    '@media (max-width: 520px)': {
        padding: '0 50px 20px',
        fontSize: '2.5rem',
        lineHeight: '1'
    },
    '@media (min-width: 521px) and (max-width: 662px)': {
        padding: '0 80px 20px',
        fontSize: '2.5rem',
        lineHeight: '1'
    },
    '@media (min-width: 663px) and (max-width: 900px)': {
        textAlign: 'center',
        lineHeight: '1'
    }
});

export const Description = styled(Typography)({
    color: '#6b7280',
    fontSize: '1.25rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
    '@media (max-width: 520px)': {
        paddingLeft: '50px',
        paddingRight: '50px',
        textAlign: 'left'
    },
    '@media (min-width: 521px) and (max-width: 662px)': {
        paddingLeft: '80px',
        paddingRight: '80px',
        textAlign: 'left'
    },
    '@media (min-width: 663px) and (max-width: 900px)': {
        paddingTop: '20px'
    }
});

export const ButtonGroup = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100vw',
    marginTop: '32px',
    columnGap: '10px',
    '@media (max-width: 520px)': {
        flexDirection: 'column',
        paddingLeft: '50px',
        paddingRight: '50px'
    },
    '@media (min-width: 521px) and (max-width: 662px)': {
        justifyContent: 'left',
        paddingLeft: '80px'
    }
});

export const Btn = styled(Button)({
    height: '3.875rem',
    padding: '16px 40px',
    color: '#FFFFFF',
    backgroundColor: '#2563EB',
    '&:hover': {
        backgroundColor: '#194cbd'
    },
    '&:nth-of-type(2)': {
        height: '3.875rem',
        color: '#2563EB',
        backgroundColor: '#F9FAFB',
        border: '1px solid #2563EB',
        '&:hover': {
            backgroundColor: '#E4EBF2'
        }
    },
    '@media (max-width: 520px)': {
        width: '100%',
        '&:nth-of-type(2)': {
            marginTop: '15px'
        }
    }
});