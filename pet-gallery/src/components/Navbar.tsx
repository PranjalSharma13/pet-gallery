import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaInfoCircle, FaAdjust } from 'react-icons/fa';  // Import icons for Home, About Me, and Theme

// Create styled components for Navbar and Links
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5); /* Transparent background */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 2px -2px gray; /* Optional: Adds a subtle shadow */
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;  // Adds space between the icon and text

  &:hover {
    color: #007BFF; /* Blue color on hover */
  }
`;

const NavbarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface NavbarProps {
  toggleTheme: () => void;
}

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarLink to="/">
        <NavbarIcon>
          <FaHome />
        </NavbarIcon>
        Home
      </NavbarLink>
      <NavbarLink to="/about">
        <NavbarIcon>
          <FaInfoCircle />
        </NavbarIcon>
        About Me
      </NavbarLink>
      <NavbarLink to="#">
        <NavbarIcon>
          <FaAdjust />
        </NavbarIcon>
        Toggle Theme
      </NavbarLink>
    </NavbarWrapper>
  );
};

export default Navbar;
