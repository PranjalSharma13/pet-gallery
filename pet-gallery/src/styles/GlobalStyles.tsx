import { createGlobalStyle } from 'styled-components';
import petsImage from '../assets/images/pets2.png';
import petsImage2 from '../assets/images/pets5.png';

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
  background-image: url(${petsImage}),url(${petsImage2}); ;
  background-repeat: no-repeat;
  background-position: bottom right, right top; /* Positions the image at the bottom-right corner */
  background-size: auto 400px,200px auto; /* Ensures the image height is 600px and scales proportionally */
  margin: 0;
  padding: 0;
  line-height: 1.6; /* Ensures good text readability */
}
`;

export default GlobalStyle;
