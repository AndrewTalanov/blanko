import "./SectionChar.scss";

import { data } from "./data.js";

import woman from "../../img/woman1.png";
import druk from "../../img/druk.svg";

const SectionChar = () => {
    return (
        <section className="section-char">
            <div className="char-items container">
                {data.map((item, id) => {

                    const {img, title, description} = item;

                    return (
                        <div className="char-item" key={id}>
                            <img src={img} alt="character" />
                            <div className="char-content">
                                <h3 className="char-title">{title}</h3>
                                <p className="char-descr">{description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="char-poster container">
                <div className="char-wrapper">
                    <div className="char-left">
                        <img src={druk} alt="logo druk" />
                        <h2>“Join a community of industry leading professionals. Join a community of industry leading professionals.“</h2>
                        <h3>Laura Paula <br /> <span>Director @Company</span> </h3>
                        <div className="cubs">
                            <div className="cubs-item active"></div>
                            <div className="cubs-item"></div>
                        </div>
                    </div>
                    <div className="char-right">
                        <img src={woman} alt="woman" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default SectionChar;