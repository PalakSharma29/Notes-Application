import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Swal from 'sweetalert2';
import {
  NavbarWrapper,
  Logo,
  RightContainer,
  StyledLinkButton,
  AccountIconButton,
  Dropdown,
  LogoutButton
} from './styled.navbar';
import { logout } from '../../utils/logout';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login')
    setDropdownOpen(false);
    Swal.fire({
      icon: 'success',
      title: 'Logged out successfully!',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <NavbarWrapper>
      
      <Link to="/">
        <Logo>📝 GrazKeep</Logo>
      </Link>

      <RightContainer>
        <StyledLinkButton to="/login">Login</StyledLinkButton>

        <div>
          <AccountIconButton onClick={() => setDropdownOpen(!dropdownOpen)}>
            <AccountCircleIcon fontSize="large" />
          </AccountIconButton>

          {dropdownOpen && (
            <Dropdown>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </Dropdown>
          )}
        </div>
      </RightContainer>
    </NavbarWrapper>
);
};

export default Navbar;

