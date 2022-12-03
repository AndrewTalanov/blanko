import { useRef } from 'react';

import './Header.scss';

import logo from '../../img/logo.svg';
import arrowDown from '../../img/arrow-down.svg';
import Button from '../button/Button';

const Header = () => {

    const burgerMenu = useRef();

    const openMenu = () => {
        burgerMenu.current.style.top =  0;
    }

    const closeMenu = () => {
        burgerMenu.current.style.top = '-1000px';
    }

    return(
        <header className="header">
            <div className="header-wrapper container">
                <div className="header-left">
                    <img src={logo} alt="logo" />
                    <div className="line"></div>
                    <a className="mail" href="mailto:mail@blanko.com">mail@blanko.com</a>
                </div>
                <div className="header-right">
                    <ul>
                        <li>Landing <img src={arrowDown} alt="arrow"/></li>
                        <li>All Pages <img src={arrowDown} alt="arrow"/></li>
                        <li>Template <img src={arrowDown} alt="arrow"/></li>
                        <div className="line"></div>
                        <li>Sing up</li>
                    </ul>

                    <Button padding="12px 32px" background="orange" color="black">Purchase template</Button>

                    <div className="burger-btn" onClick={openMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="burger-menu" ref={burgerMenu}>

                        <button className="burger-close" onClick={closeMenu}></button>

                        <a className="mail" href="mailto:mail@blanko.com">mail@blanko.com</a>

                        <ul>
                            <li>Landing <img src={arrowDown} alt="arrow"/></li>
                            <li>All Pages <img src={arrowDown} alt="arrow"/></li>
                            <li>Template <img src={arrowDown} alt="arrow"/></li>
                            <div className="line"></div>
                            <li>Sing up</li>
                        </ul>

                        <Button padding="12px 32px" background="orange" color="black">Purchase template</Button>
                    </div>
                </div>
            </div>
      </header>
    );
}

export default Header;