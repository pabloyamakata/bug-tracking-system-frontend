import { useState } from 'react';

import { 
    MainContainer, 
    LoginContainer, 
    Title, 
    LoginTextField, 
    SubmitButton
} from './Styles';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';

function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const handlePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    }

    return(
        <MainContainer>
            <LoginContainer component='form'>
                <Title variant='h5'>Sign In</Title>
                
                <LoginTextField
                type='text'
                label='Username'
                name='username'
                autoComplete='off' 
                variant='outlined' 
                size='small' 
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon sx={{color: 'var(--primary-color)'}} />
                      </InputAdornment>
                    )
                }} />
                
                <LoginTextField
                type={isPasswordVisible ? 'text' : 'password'}
                label='Password'
                name='password'
                autoComplete='off'
                variant='outlined' 
                size='small'
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton 
                        onClick={handlePasswordVisibility}
                        sx={{padding: 0}}>
                          {
                            isPasswordVisible ? 
                            <KeyOffIcon sx={{color: 'var(--primary-color)'}} /> :
                            <KeyIcon sx={{color: 'var(--primary-color)'}} />
                          }
                        </IconButton>
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