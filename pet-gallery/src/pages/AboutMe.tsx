
import styled from 'styled-components';

// Styled component to add margin-top for space below the fixed navbar
const AboutWrapper = styled.div`
  margin-top: 60px; 
  padding: 20px;
`;

const About = () => {
  return (
    <AboutWrapper>
      <h1>About Me</h1>
      <p>This is the About Me page.</p>
    </AboutWrapper>
  );
};

export default About;