import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { SignUpBox, SignupWrapper } from './styled.signup';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterPayload } from '../../api/auth-api/data/types';
import { useRegister } from '../../hooks/auth/useAuth';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

 const{mutate : register, isPending} = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);
    const form: RegisterPayload = {
      name: String(data.get('name')),
      email: String(data.get('email')),
      password: String(data.get('password')),
      confirmPassword: String(data.get('confirmPassword')),
    };

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

   register(form, {
    onSuccess: (res) => {
      localStorage.setItem('user', JSON.stringify(res));
      navigate("/login")
    },
    onError:(err:any) => {
      alert(err.message || "Something went wrong")
    },
   })
  };

  return (
    <SignupWrapper>
      <SignUpBox>
        <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom color="#1976D2">
          Sign Up to GrazKeep
        </Typography>

        <Box component="form" onSubmit={handleSubmit} mt={2}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            margin="normal"
            size="small"
            InputProps={{
              style: {
                backgroundColor: '#ffffff',
                color: 'black',
                fontWeight: '2px',
                borderRadius: '8px',
              },
            }}
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            variant="outlined"
            margin="normal"
            size="small"
            InputProps={{
              style: {
                backgroundColor: '#ffffff',
                color: 'black',
                fontWeight: '2px',
                borderRadius: '8px',
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            size="small"
            InputProps={{
              style: {
                backgroundColor: '#ffffff',
                color: 'black',
                fontWeight: '2px',
                borderRadius: '8px',
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: '#1976D2' }}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            size="small"
            InputProps={{
              style: {
                backgroundColor: '#ffffff',
                color: 'black',
                fontWeight: '2px',
                borderRadius: '8px',
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end" sx={{ color: '#1976D2' }}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: '#1976D2',
              color: '#ffffff',
              fontWeight: 'bold',
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            {isPending ? 'Registering...' : 'Sign Up'}
          </Button>
        </Box>

        <Typography mt={2} textAlign="center" color="#1976D2" fontWeight="medium">
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#1976D2', textDecoration: 'underline' }}>
            Login
          </Link>
        </Typography>
      </SignUpBox>
    </SignupWrapper>
  );
}

export default SignUp;
