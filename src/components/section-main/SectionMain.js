import "./SectionMain.scss";

import template from '../../img/template.png';
import star from '../../img/star.svg';

const SectionMain = () => {
    return (
        <section className="section-main">
            <div className="main-wrapper container">

                <div className="main-left">
                    <h1>Blanko template</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris porttitor amet volutpat.</h2>

                    <div className="main-buttons">
                        <button className="button buy-template">Purchase template</button>
                        <button className="button other-template">Other templates</button>
                    </div>

                    <div className="main-rating">
                        <div className="main-starts">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <h3>“Working with the Mabel template has been a breeze from start to finish.”</h3>
                        <p>Rated 5/5 <span>- 129 Reviews</span></p>
                    </div>

                </div>

                <div className="main-right">
                    <img src={template} alt="template site" />
                </div>

            </div>
        </section>
    );
}

export default SectionMain;