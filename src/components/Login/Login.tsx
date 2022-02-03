import { 
    MainContainer, 
    LoginContainer, 
    Title, 
    LoginTextField, 
    SubmitButton
} from './Styles';

import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';

function Login() {
    return(
        <MainContainer>
            <LoginContainer component='form'>
                <Title>Sign In</Title>
                
                <LoginTextField
                type='email'
                label='Email'
                name='email'
                autoComplete='off' 
                variant='outlined' 
                size='small' 
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon style={{color: 'var(--primary-color)'}} />
                      </InputAdornment>
                    )
                }} />
                
                <LoginTextField
                type='password'
                label='Password'
                name='password'
                autoComplete='off' 
                variant='outlined' 
                size='small' 
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <KeyIcon style={{color: 'var(--primary-color)'}} />
                      </InputAdornment>
                    )
                }} />

                <SubmitButton 
                variant="contained"
                size='medium'>
                Login
                </SubmitButton>
            </LoginContainer>
        </MainContainer>
    )
}

export default Login;