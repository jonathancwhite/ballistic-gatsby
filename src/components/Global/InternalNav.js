import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../assets/img/ba-logo-cropped.png';

const InternalNav = ({color}) => {
  return (
      <>
      <div className={`fullblock ${color}`}></div>
        <nav className='navbar'>
                <div className="navbar__container">
                    <Link to='/' className="navbar__logo" >
                        <img src={Logo} alt="Ballistic Agency Logo" />
                    </Link>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <Link to="/projects" className="navbar__links" >
                                Projects
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/services" className="navbar__links" >
                                Services
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/our-team" className="navbar__links">
                                Our Team
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar__cta">
                    <Link to="/contact" className="navbar__links">
                        Contact Us
                    </Link>
                    </div>
                </div>
            </nav>
        </>
  )
}

export default InternalNav