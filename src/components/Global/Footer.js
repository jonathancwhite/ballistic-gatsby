import React from 'react'
import Logo from '../../img/logos/ba-logo-cropped.png';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__container">
            <div className="footer__content">
                <div className="footer__column">
                    <Link to="/"><img src={Logo} width="300" height="80" alt="Ballistic Logo" /></Link>
                    <div className="footer__icons">
                        <div className="footer__icon"><i className="fa fa-location-arrow fa-xs"></i><span>United States</span></div>
                        <div className="footer__icon"><i className="fa fa-comment fa-xs"></i><span>English (United States)</span></div>
                    </div>
                </div>
                <div className="footer__column">
                    <h4>Company</h4>
                    <ul>
                        <li className='footer__links'><Link to="/">About Us</Link></li>
                        <li className='footer__links'><Link to="/our-team">Careers</Link></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h4>Resources</h4>
                    <ul>
                        <li className='footer__links'><Link to="/">Support</Link></li>
                        <li className='footer__links'><Link to="/">Contact</Link></li>
                        <li className='footer__links'><Link to="/">Privacy & Terms</Link></li>
                        <li className='footer__links'><Link to="/sitemap/sitemap-0.xml">Sitemap</Link></li>
                        <li className='footer__links'><Link to="/">Brand Assets</Link></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h4>Services</h4>
                    <ul>
                        <li className='footer__links'><Link to="/seo">Search engine optimization</Link></li>
                        <li className='footer__links'><Link to="/email-marketing">Email marketing</Link></li>
                        <li className='footer__links'><Link to="/">Web design & development</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                &copy; Ballistic Agency
            </div>
        </div>
    </div>
  )
}

export default Footer