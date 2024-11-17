import { createGlobalStyle } from 'styled-components';
import petsImage from '../assets/images/pets2.png';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  font-family: 'Poppins', sans-serif;
  color: #333; /* Makes text readable on a light background */
  background-color: #f0fdf4; /* Very light green background */
  background-image: url(${petsImage});
  background-repeat: no-repeat;
  background-position: bottom right; /* Positions the image at the bottom-right corner */
  background-size: auto 600px; /* Ensures the image height is 600px and scales proportionally */
  margin: 0;
  padding: 0;
  line-height: 1.6; /* Ensures good text readability */
}
`;

export default GlobalStyle;
