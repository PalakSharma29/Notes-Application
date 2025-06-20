import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export const NavbarWrapper = styled('nav')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 1.5rem',
  backgroundColor: 'lightBlue',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

export const Logo = styled('span')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'brown',
}));

export const RightContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  position: 'relative',
});

export const StyledLinkButton = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  textDecoration: 'none',
  fontSize: '0.95rem',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const AccountIconButton = styled('button')({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#555',
});

export const Dropdown = styled('div')({
  position: 'absolute',
  right: 0,
  marginTop: '0.5rem',
  width: '8rem',
  backgroundColor: '#fff',
  border: '1px solid #e0e0e0',
  borderRadius: '6px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  zIndex: 10,
});

export const LogoutButton = styled(Button)({
  width: '100%',
  justifyContent: 'flex-start',
  padding: '0.5rem 1rem',
  fontSize: '0.9rem',
  textTransform: 'none',
  color: '#333',
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
});
