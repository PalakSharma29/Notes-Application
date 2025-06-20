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
import { LoginBox, LoginWrapper } from './styled.login';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/auth/useAuth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const { mutate: login, isPending } = useLogin();

  const emailRegx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(
      value === ''
        ? 'Email is required'
        : !emailRegx.test(value)
        ? 'Enter a valid email'
        : ''
    );
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value === '' ? 'Password is required' : '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setEmailError(!email ? 'Email is required' : '');
      setPasswordError(!password ? 'Password is required' : '');
      return;
    }

    login(
      { email, password },
      {
        onSuccess: (data) => {
          // Store token
          localStorage.setItem('token', data.token);

          localStorage.setItem('user', JSON.stringify(data.user));
          navigate('/'); 
        },
        onError: (error: any) => {
          alert(error?.message || 'Login failed. Please try again.');
        },
      }
    );
  };

  return (
    <LoginWrapper>
      <LoginBox>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          color="#1976D2"
        >
          Login to GrazKeep
        </Typography>

        <Box component="form" onSubmit={handleSubmit} mt={2}>
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            variant="outlined"
            margin="normal"
            size="small"
            value={email}
            onChange={handleChangeEmail}
            error={!!emailError}
            helperText={emailError}
            InputProps={{
              style: {
                backgroundColor: '#ffffff',
                color: 'black',
                fontWeight: 'bold',
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
            value={password}
            onChange={handleChangePassword}
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              style: {
                backgroundColor: '#ffffff',
                color: 'black',
                fontWeight: '2px',
                borderRadius: '8px',
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: '#1976D2' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isPending}
            sx={{
              mt: 3,
              backgroundColor: '#1976D2',
              color: '#ffffff',
              fontWeight: '2px',
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            {isPending ? 'Logging in...' : 'Login'}
          </Button>
        </Box>

        <Typography mt={2} textAlign="center" color="#1976D2" fontWeight="medium">
          Don’t have an account?{' '}
          <Link
            to="/signup"
            style={{ color: '#1976D2', textDecoration: 'underline' }}
          >
            Sign Up
          </Link>
        </Typography>
      </LoginBox>
    </LoginWrapper>
  );
}

export default Login;
