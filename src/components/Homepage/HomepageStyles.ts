import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

export const HomeContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100vh'
});

export const Header = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '90vw',
    height: '40px',
    paddingTop: '3rem'
});

export const LogoTitle = styled(Typography)({
    marginLeft: '5px',
    fontWeight: '600'
});

export const ContentWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px'
});

export const Title = styled(Typography)({
    color: '#111827',
    fontSize: '3.75rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '800',
    lineHeight: '.7'
});

export const Subtitle = styled(Typography)({
    color: '#4338CA',
    fontSize: '3.75rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '800'
});

export const Description = styled(Typography)({
    color: '#6b7280',
    fontSize: '1.25rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    textAlign: 'center'
});

export const ButtonGroup = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100vw',
    marginTop: '32px',
    columnGap: '10px'
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
    }
});