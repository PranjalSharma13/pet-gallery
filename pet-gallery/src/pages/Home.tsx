
import styled from 'styled-components';
import ImageGallery from "../components/ImageGallery";

// Styled component to add margin-top for space below the fixed navbar
const HomeWrapper = styled.div`
  margin-top: 60px; 
  padding: 20px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h1>About Pets</h1>
      <p>This is a sample pet gallery built using React and TypeScript.</p>
      <ImageGallery />
    </HomeWrapper>
  );
};

export default Home;
