import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaInfoCircle, FaAdjust } from 'react-icons/fa';  // Imported icons for Home, About Me, and Theme
import { useTheme, useThemeDispatch } from '../context/ThemeContext';  // Imported theme context hooks

// Create styled components for Navbar and Links
const NavbarWrapper = styled.nav<{ darkTheme: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: ${({ darkTheme }) => (darkTheme ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)')}; /* Dark background for dark theme, light for light theme */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 2px -2px gray; /* Optional: Adds a subtle shadow */
`;

const NavbarLink = styled(Link)<{ darkTheme: boolean }>`
  text-decoration: none;
  color: ${({ darkTheme }) => (darkTheme ? '#fff' : '#000')}; /* White text for dark theme, black for light theme */
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;  // Adds space between the icon and text

  &:hover {
    color: ${({ darkTheme }) => (darkTheme ? '#ddd' : '#6e6b6a')}; /* Lighter color on hover */
  }
`;

const NavbarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  const darkTheme = useTheme();  // Get current theme (true for dark, false for light)
  const setDarkTheme = useThemeDispatch();  // Get dispatch function to toggle the theme

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);  // Toggle theme state on click
  };

  return (
    <NavbarWrapper darkTheme={darkTheme}> {/* Pass darkTheme to change styles */}
      <NavbarLink to="/" darkTheme={darkTheme}>
        <NavbarIcon>
          <FaHome />
        </NavbarIcon>
        Home
      </NavbarLink>
      <NavbarLink to="/about" darkTheme={darkTheme}>
        <NavbarIcon>
          <FaInfoCircle />
        </NavbarIcon>
        About Me
      </NavbarLink>
      <NavbarLink to="#" darkTheme={darkTheme} onClick={toggleTheme}>
        <NavbarIcon>
          <FaAdjust />
        </NavbarIcon>
        Toggle Theme
      </NavbarLink>
    </NavbarWrapper>
  );
};

export default Navbar;
