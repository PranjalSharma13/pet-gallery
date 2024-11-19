import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar';

const App = () => {

  return (
   <Router>
        <GlobalStyle />
        <Navbar /> {/* Pass toggleTheme to Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
    
  );
};



export default App;
