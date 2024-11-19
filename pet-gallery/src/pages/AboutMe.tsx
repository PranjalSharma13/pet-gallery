
import styled from 'styled-components';

// Styled component 
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
