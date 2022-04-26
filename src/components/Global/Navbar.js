import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../../assets/img/ba-logo-cropped.png';
import { AiFillCaretDown } from 'react-icons/ai';
// import { useScrollHandler } from '../hooks/useScrollHandler';

function Navbar({color}) {

    // const scroll = useScrollHandler();

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => setClick(false);

    // const onMouseEnter = () => {
    //     if (window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(true);
    //     }
    // }

    return (
        <>
        <div className={`skewed ${color}`}></div>
        <nav className='navbar'>
            <div className="navbar__container">
                <Link to='/' className="navbar__logo" >
                    <img src={Logo} alt="Ballistic Agency Logo" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
                    <li className='navbar__item'>
                        <Link to="/our-work" className='navbar__links' onClick={closeMobileMenu}>Projects</Link>
                    </li>
                    <li className='navbar__item'>
                        <Link to="/services" className='navbar__links' onClick={closeMobileMenu}>
                            Services <AiFillCaretDown />
                        </Link>
                    </li>
                    <li className='navbar__item'>
                        <Link to="/our-team" className='navbar__links' onClick={closeMobileMenu}>Our Team</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar