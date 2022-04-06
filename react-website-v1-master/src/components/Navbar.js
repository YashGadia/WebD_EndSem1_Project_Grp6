import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='avs'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              AVS{" "}
              <span className="second-word-formatting">
                {" "}
                &nbsp; <i className="fab fa-avianex" />
              </span>
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='nav-list'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about-us'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/blogs'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Blogs
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/gallery'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>
              </li>
              <div className='Sign-Up'>
                <li>
                  <Link
                    to='/sign-up'
                    className='nav-sign'
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
