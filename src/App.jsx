import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Contactme from './Pages/Contactme';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<Aboutme />} />
          <Route path="/contactMe" element={<Contactme />} />
        </Routes>   
        <Footer /> {/* Footer now appears on all pages */}
      </Router>
    </div>
  );
}

export default App;
