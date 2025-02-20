import React,{useState,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [pageName,setPageName]= useState('');
  const [fade,setFade] =useState(false);

  useEffect(()=>{
    setFade(false);
    setTimeout(()=>{
      setPageName(getPageName(location.pathname));
      setFade(true);
    },100);
  },[location.pathname]);

  // Extract page name from path
  const getPageName = (path) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/aboutMe':
        return 'About Me';
      case '/contactMe':
        return 'Contact Me';
      default:
        return 'My Portfolio';
    }
  };

  return (
    <div className="navbar">
      <div className="logoleft">
        <h1 className="navbar-title">My Portfolio Website</h1>
      </div>
      <div className="decorations">
      <p className={fade ? 'fade-in' : 'fade-out'}>{pageName}</p>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/aboutMe">About Me</Link>
        <Link to="/contactMe">Contact Me</Link>
      </div>
    </div>
  );
}

export default Navbar;
