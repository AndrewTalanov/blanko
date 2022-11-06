import "./Footer.scss";

import twit from "../../img/twit.svg";
import fb from "../../img/fb.svg";
import inst from "../../img/inst.svg";
import web from "../../img/web.svg";
import logo from '../../img/logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer container">
                <div className="footer-logo">
                    <img src={logo} alt="logo" />
                    <button className="button">Get on Webflow</button>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li>Showcase</li>
                        <li>Landing one</li>
                        <li>Sign up</li>
                        <li>Other templates</li>
                    </ul>
                    <ul>
                        <li><img src={inst} alt="instagram" /></li>
                        <li><img src={twit} alt="twitter" /></li>
                        <li><img src={fb} alt="facebook" /></li>
                    </ul>
                </div>
                <div className="footer-line"></div>
                <div className="footer-menu end">
                    <ul>
                        <li>Powered by</li>
                        <li><img src={web} alt="webflow" /></li>
                        <li>Designed by</li>
                        <li><span>Veljko</span></li>
                    </ul>
                    <p>Contact</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;