import React, { useState } from 'react';
import BallisticLogo from '../../img/logos/ba-logo-cropped.png'
import Dropdown from './Dropdown';
import { Link } from 'gatsby';
import $ from 'jquery';

function Navbar({navbgStyle, headerColor}) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function boldNavItem() {
    $('.dropdown-parent > a').css('font-weight', '700');
  }

  function unboldNavItem() {
    $('.dropdown-parent > a').css('font-weight', '');
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      unboldNavItem();
    } else {
      setDropdown(true);
      boldNavItem();
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      unboldNavItem();
    } else {
      setDropdown(false);
      unboldNavItem();
    }
  };

  return (
    <>
    <div className={`${navbgStyle} ${headerColor}`}></div>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={BallisticLogo} alt="" height="35" width="200"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/our-work' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li
            className='nav-item dropdown-parent'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/our-team'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Our Team
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;