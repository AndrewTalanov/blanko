import './Header.scss';

import logo from '../../img/logo.svg';
import arrowDown from '../../img/arrow-down.svg';
import Button from '../button/Button';

const Header = () => {
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
                        <li>Sing up <img src={arrowDown} alt="arrow"/></li>
                    </ul>

                    <Button padding="12px 32px" background="orange" color="black">Purchase template</Button>
                </div>
            </div>
      </header>
    );
}

export default Header;