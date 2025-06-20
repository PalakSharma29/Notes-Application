import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SignupWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(to right, #bbdefb, #2196f3)',
  padding: '20px',
});

export const SignUpBox = styled(Paper)({
  padding: '32px',
  width: '100%',
  maxWidth: '420px',
  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
});
