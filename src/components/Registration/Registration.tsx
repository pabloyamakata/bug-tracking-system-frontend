import { useState } from 'react';

import {
    MainWrapper,
    RegistrationForm,
    RegistrationField,
    RegistrationButton 
} from './Styles';

import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';

function Registration() {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    return(
        <MainWrapper>
            <RegistrationForm>
                <RegistrationField
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

                <RegistrationField
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
                    
                <RegistrationButton
                type='submit'
                variant='contained'
                size='medium'>
                Register
                </RegistrationButton>
            </RegistrationForm>
        </MainWrapper>
    )
}

export default Registration;