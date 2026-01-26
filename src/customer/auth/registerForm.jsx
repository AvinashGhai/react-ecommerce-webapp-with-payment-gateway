import React from 'react'
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Move FormData inside the function
        const data = new FormData(e.currentTarget);
        
        const userData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password')
        }
        
        console.log('userData', userData);
        
        // Add your submit logic here (API call, etc.)
        // Example: api.register(userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>If you already have an account ?</p>
                    <Button onClick={() => navigate("/login")} className='ml-5' size='small'>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm