import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Contactme from './Pages/Contactme';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<Aboutme />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
