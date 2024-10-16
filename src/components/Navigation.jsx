import React, { useEffect, useState } from 'react';

function Navigation() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
  
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }, [lastScrollY]);
  
    return (
        <nav className={`navbar ${showNavbar ? 'navbar--visible' : 'navbar--hidden'}`}>
            <div className="nav-logo">
                <img src="./src/assets/img/logo-main.svg" alt="" />
            </div>
            <div className="nav-text-data">
                {["Services", "Our work", "About Us", "Insights", "Contact"].map((item, index) => (
                    <a key={index} href='#' className={`nav-links ${index === 4 && "ml-72" }`}>{item}</a>
                ))}
            </div>
        </nav>
    );
}

export default Navigation;
