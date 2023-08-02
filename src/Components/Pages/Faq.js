import React from 'react'
import './Faq.css'
import joinImg from '../../assets/faq.jpg'
import Buttons from '../UI/Buttons'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'

function Faq() {
    return (
        <>
            <div className="join-section">
                <div className="about-us">
                    <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">FAQ</span></span>
                </div>
                <div className="join-row">
                    <div className="join-text">
                        <h2 className="join-heading">Want to join partnership?</h2>
                        <p className="join-para">Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.</p>
                    </div>

                    <div className="join-img">
                        <div className="mark">
                            <i class="quest-icon fa-solid fa-question"></i>
                        </div>

                        <img className='faq-img' src={joinImg} alt="" />

                    </div>
                </div>
            </div>

            <div className="qna-tab">
                <div className="tab-text">
                    <div className="tab-btns">
                        <button className='btns-tab delivery'>Delivery</button>
                        <button className='btns-tab tech'>Technical</button>
                        <button className='btns-tab restaurant'>Restaurants</button>
                    </div>

                    <div className="tab-search">
                        <input type="text" id="tab-input" placeholder='Enter Question Keywords' />
                    </div>
                </div>
            </div>

            <div className="qna-section">
                <div className="question">
                    <div className="q-letter">
                        <i class="fa-solid fa-q"></i>
                    </div>

                    <h6 className="q-heading">Question 1. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere?
                    </h6>
                </div>

                <div className="answer">
                    <div className="ans-text">
                        <p className="ans-para">Quis ipsum suspendisse ultrices gravida dictum. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ut sem nulla pharetra diam sit amet nisl suscipit. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                            <br /><br />
                            Suspendisse ultrices gravida dictum fusce ut. Tempor commodo ullamcorper a lacus vestibulum sed. Risus at ultrices mi tempus imperdiet. Proin sagittis nisl rhoncus mattis rhoncus urna neque.

                            <div className="a-letter">
                                <i class="fa-solid fa-a"></i>
                            </div>
                        </p>


                    </div>
                </div>

                {/*q2 */}
                <div className="question">
                    <div className="q-letter">
                        <i class="fa-solid fa-q"></i>
                    </div>

                    <h6 className="q-heading">Question 2. Id neque aliquam vestibulum morbi. Integer vitae justo eget magna fermentum iaculis eu non diam. Nam libero justo laoreet sit amet cursus sit amet. Platea dictumst quisque sagittis purus sit amet volutpat consequat?
                    </h6>
                </div>

                <div className="answer">
                    <div className="ans-text">
                        <p className="ans-para">Quis ipsum suspendisse ultrices gravida dictum. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ut sem nulla pharetra diam sit amet nisl suscipit. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                            <br /><br />
                            Suspendisse ultrices gravida dictum fusce ut. Tempor commodo ullamcorper a lacus vestibulum sed. Risus at ultrices mi tempus imperdiet. Proin sagittis nisl rhoncus mattis rhoncus urna neque.

                            <div className="a-letter">
                                <i class="fa-solid fa-a"></i>
                            </div>
                        </p>


                    </div>
                </div>

                {/* q3 */}
                <div className="question">
                    <div className="q-letter">
                        <i class="fa-solid fa-q"></i>
                    </div>

                    <h6 className="q-heading">Question 3. Mi proin sed libero enim sed faucibus turpis in. Tristique senectus et netus et malesuada fames ac turpis. Congue eu consequat ac felis. Fringilla urna porttitor rhoncus dolor purus non enim?
                    </h6>
                </div>

                <div className="answer">
                    <div className="ans-text">
                        <p className="ans-para">Quis ipsum suspendisse ultrices gravida dictum. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ut sem nulla pharetra diam sit amet nisl suscipit. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                            <br /><br />
                            Suspendisse ultrices gravida dictum fusce ut. Tempor commodo ullamcorper a lacus vestibulum sed. Risus at ultrices mi tempus imperdiet. Proin sagittis nisl rhoncus mattis rhoncus urna neque.

                            <div className="a-letter">
                                <i class="fa-solid fa-a"></i>
                            </div>
                        </p>


                    </div>
                </div>
                {/* q4 */}
                <div className="question">
                    <div className="q-letter">
                        <i class="fa-solid fa-q"></i>
                    </div>

                    <h6 className="q-heading">
                        Question 4. Ullamcorper sit amet risus nullam eget felis eget. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quisque egestas diam in arcu cursus?
                    </h6>
                </div>

                <div className="answer">
                    <div className="ans-text">
                        <p className="ans-para">Quis ipsum suspendisse ultrices gravida dictum. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ut sem nulla pharetra diam sit amet nisl suscipit. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                            <br /><br />
                            Suspendisse ultrices gravida dictum fusce ut. Tempor commodo ullamcorper a lacus vestibulum sed. Risus at ultrices mi tempus imperdiet. Proin sagittis nisl rhoncus mattis rhoncus urna neque.

                            <div className="a-letter">
                                <i class="fa-solid fa-a"></i>
                            </div>
                        </p>


                    </div>
                </div>
                <div className="qna-btn">
                    <Buttons text='SEE ALL QUESTIONS' className='btn-quest' />
                </div>
            </div>

        <SubForm/>
        <Footer/>
        </>
    )
}

export default Faq
