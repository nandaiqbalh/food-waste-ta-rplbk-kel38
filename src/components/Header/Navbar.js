import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { MdEco } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';

import { useSidebarContext } from '../../context/sidebarContext';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <nav className={`navbar bg-green flex align-center ${scrolled ? 'scrolled' : ''}`}>
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler flex align-center justify-between">
            <Link to="/" className="navbar-brand fw-3 fs-22 flex align-center">
              <MdEco />
              <span className="navbar-brand-text fw-7">FoodWaste Campaign</span>
            </Link>

            <Link to="/FWaste" className="navbar-brand fw-3 fs-20 flex align-center">
              <span className="navbar-brand-text fw-6">Home</span>
            </Link>
            <Link to="/Recipe" className="navbar-brand fw-3 fs-20 flex align-center">
              <span className="navbar-brand-text fw-6">Recipe</span>
            </Link>
            <Link to="/About" className="navbar-brand fw-3 fs-20 flex align-center">
              <span className="navbar-brand-text fw-6">About</span>
            </Link>
            <Link to="/" className="navbar-brand fw-3 fs-20 flex align-center">
              <span className="navbar-brand-text fw-6">Logout</span>
            </Link>

            <div className="navbar-btns flex align-center">
              <button type="button" className="navbar-show-btn text-white" onClick={() => openSidebar()}>
                <IoMdMenu size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
