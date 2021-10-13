import React from 'react'
import './Footer.scss';
import bgFooter from '../../assets/img/footer-bg.jpg';
import { RiMovie2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
export const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage:`url(${bgFooter})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <span><RiMovie2Fill /></span>
                        <Link to='/'>
                            <h2>TMovie</h2>
                        </Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">about</Link>
                        <Link to="/">news movie</Link>
                        <Link to="/">tv</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">about</Link>
                        <Link to="/">news movie</Link>
                        <Link to="/">tv</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">about</Link>
                        <Link to="/">news movie</Link>
                        <Link to="/">tv</Link>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}
