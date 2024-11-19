import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import { ThemeProvider, useTheme} from './context/ThemeContext';

const App = () => {

  return (
    <ThemeProvider>
    <Router>
      <AppContent />
    </Router>
  </ThemeProvider>
  );
};
const AppContent = () => {
  const darkTheme = useTheme(); // Access the current theme state

  return (
    <>
      <GlobalStyle darkTheme={darkTheme} /> {/* Pass the theme to GlobalStyle as a prop */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
};

export default App;
