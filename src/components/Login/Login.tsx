import { useState, useEffect } from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import {
  MainContainer, 
  LoginForm,
  Title, 
  LoginTextField, 
  SubmitButton,
  RegistrationLink,
  MessageBox
} from './LoginStyles';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';

const formData = new FormData();
const loginURL = 'https://bug-tracking-system-backend.000webhostapp.com/login.php';

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isUserAlreadyKnown, setIsUserAlreadyKnown] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if(sessionStorage.getItem('userAuth')) navigate('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: yup.object({
      username: yup.string()
      .min(3, 'Username must contain between 3 and 30 characters')
      .max(30, 'Username must contain between 3 and 30 characters')
      .required('Username is required'),
      password: yup.string()
      .min(3, 'Password must contain between 3 and 60 characters')
      .max(60, 'Password must contain between 3 and 60 characters')
      .required('Password is required')
    }),
    onSubmit: values => {
      formData.append('values', JSON.stringify(values));
      axios({
        method: 'post',
        url: loginURL,
        data: formData,
        withCredentials: true
      })
      .then(res => {
        switch(res.data.status) {
          case true:
            sessionStorage.setItem('userAuth', 'true');
            navigate('/dashboard?new=0');
            break;
          case false:
            setIsUserAlreadyKnown(false);
            setTimeout(() => setIsUserAlreadyKnown(true), 10000);
        }
      });
    }
  });
    
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return(
    <MainContainer>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Title variant='h5'>Sign In</Title>

        {!isUserAlreadyKnown && <MessageBox>User doesn't exist!</MessageBox>}

        <LoginTextField
        type='text'
        label='Username'
        name='username'
        error={
          formik.touched.username &&
          formik.errors.username ?
          true : false
        }
        helperText={
          formik.touched.username &&
          formik.errors.username ?
          formik.errors.username :
          null 
        }
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete='off' 
        variant='outlined' 
        size='small'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonIcon sx={{color: 'rgb(255, 255, 255)'}} />
            </InputAdornment>
          )
        }} />

        <LoginTextField
        type={isPasswordVisible ? 'text' : 'password'}
        label='Password'
        name='password'
        error={
          formik.touched.password &&
          formik.errors.password ?
          true : false
        }
        helperText={
          formik.touched.password &&
          formik.errors.password ?
          formik.errors.password :
          null 
        }
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
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
                  <KeyOffIcon sx={{color: 'rgb(255, 255, 255)'}} /> : 
                  <KeyIcon sx={{color: 'rgb(255, 255, 255)'}} /> 
                }
              </IconButton>
            </InputAdornment>
            )
        }} />

        <SubmitButton
        type='submit'
        variant='contained'
        size='medium'>
        Login
        </SubmitButton>

        <RegistrationLink>
        Don't have an account?
        <RouterLink 
        to='/registration'
        style={{
          marginLeft: '3px', 
          color: '#ba68c8'
        }}>
        Create one  
        </RouterLink>   
        </RegistrationLink>
      </LoginForm>
    </MainContainer>
  )
}

export default Login;