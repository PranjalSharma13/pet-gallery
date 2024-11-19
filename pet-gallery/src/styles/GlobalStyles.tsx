import { createGlobalStyle } from 'styled-components';
import petsImage from '../assets/images/pets2.png';
import petsImage2 from '../assets/images/pets5.png';

interface GlobalStyleProps {
  darkTheme: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${({ darkTheme }) => (darkTheme ? '#fff' : '#333')}; /* Light text for dark theme, dark text for light theme */
    background-color: ${({ darkTheme }) => (darkTheme ? '#333' : '#f0fdf4')}; /* Dark background for dark theme, light background for light theme */
    background-image: url(${petsImage}),url(${petsImage2});
    background-repeat: no-repeat;
    background-position: bottom right, right top;
    background-size: auto 400px, 200px auto;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s, background-image 0.3s; /* Smooth transition */
  }
`;

export default GlobalStyle;
