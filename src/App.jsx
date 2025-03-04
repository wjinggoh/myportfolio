import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Contactme from './Pages/Contactme';
import Footer from './Components/Footer';
import Admin from './Pages/Admin';  // ✅ Import Admin component

function App() {
  // ✅ Get the query parameter "access" from the URL
  const queryParams = new URLSearchParams(window.location.search);
  const isAdmin = queryParams.get("access") === "true";  // ✅ Check if "access=true"

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<Aboutme />} />
          <Route path="/contactMe" element={<Contactme />} />
          {isAdmin && <Route path="/admin" element={<Admin />} />}  {/* ✅ Only show Admin when access=true */}
        </Routes>   
        <Footer style={{ marginBottom: "100px" }} /> {/* ✅ Footer appears on all pages */}
      </Router>
    </div>
  );
}

export default App;
