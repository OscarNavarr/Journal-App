import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { ReportGmailerrorred } from '@mui/icons-material';


const formData = {
  email:'oscarn@gmail.com',
  password:'123456',
  displayName:'Oscar Navarro'
};

const formValidations = {
  email:[ (value) => value.includes('@'), 'El correo debe de tener un @'],
  password:[ (value) => value.length >=6, 'El password debe de tener mas de 6 letras'],
  displayName:[ (value) => value.length >=1, 'El nombre es obligatorio'],

}

export const RegisterPage = () => {

  const {
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(formState);
  }

  return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
              <Grid container>
                <Grid item xs={12} sx={{ mt: 2}}>
                  <TextField 
                    label="Nombre completo"
                    type="text"
                    placeholder='Nombre Completo'
                    fullWidth
                    name='displayName'
                    value={displayName}
                    onChange={onInputChange}
                  />
                </Grid>
                
                <Grid item xs={12} sx={{ mt: 2}}>
                  <TextField 
                    label="Correo"
                    type="email"
                    placeholder='tuemail@gmail.com'
                    fullWidth
                    name='email'
                    value={email}
                    onChange={onInputChange}
                  />
                </Grid>
                
                <Grid item xs={12} sx={{ mt: 2}}>
                  <TextField 
                    label="Password"
                    type="password"
                    placeholder='password'
                    fullWidth
                    name='password'
                    value={password}
                    onChange={onInputChange}
                  />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}} >
                  <Grid item xs={ 12 } sm={ 12 }>
                    <Button 
                      type='submit'
                      variant='contained' 
                      fullWidth>
                      Crear cuenta
                    </Button>
                  </Grid>            
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Typography sx={{ mr:1 }}>¿Ya tienes cuenta? </Typography>
                  <Link component={ RouterLink } color='inherit' to='/auth/login'>
                    Ingresar
                  </Link>
                </Grid>
              </Grid>
            </form>
        </AuthLayout>
        

      
  )
}
