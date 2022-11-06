import "./SectionFeedback.scss";

import star from '../../img/star.svg';

const SectionFeedback = () => {
    return (
        <section className="section-feedback">
            <div className="feedback container">
                <div className="feedback-left">
                    <h2>Ready to scale your business?</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris porttitor amet volutpat.</h3>
                    <div className="buttons">
                        <button className="button button-black">Purchase template</button>
                        <button className="button">Other templates</button>
                    </div>

                    <div className="feedback-rating">
                        <div className="feedback-starts">
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
                <div className="feedback-right">
                    <form className="form">
                        <h3 className="form-title">Sign up for free</h3>

                        <label>
                            <h3>Your email</h3>
                            <input type="text" name="email" placeholder='example@mail.com' />
                        </label>

                        <label>
                            <h3>Your password</h3>
                            <input type="password" name="password" placeholder='*************' />
                        </label>

                        <label className="form-checkbox">
                            <input type="checkbox" />
                            <h3>I agree to the privacy policy</h3>
                        </label>

                        <button className="button" type="submit">Submit</button>
                        <p>Already have an account? <span>Sign in.</span> </p>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default SectionFeedback;