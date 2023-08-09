import React from 'react'
import './BecomeApart.css'
import Buttons from '../UI/Buttons'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'

function BecomeApart() {
    return (
        <>
            <div className="courier-parent">
                <div className="courier-section">
                    <div className="about-us">
                        <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">Become a Part</span></span>
                    </div>

                    <div className="courier-bg">
                        <div className="courier-row">
                            <div className="courier-row-one">
                                <div className="courier-text">
                                    <h2 className="courier-head">Want to join Partnership?</h2>
                                    <p className="courier-para">Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.</p>
                                </div>
                            </div>

                            <div data-aos="fade-up" className="courier-row-two">
                                <div className="courier-form">
                                    <h3 className="form-heading">Join Courier</h3>
                                    <p className="form-para">Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.</p>

                                    <div className="name-form">
                                        <input type="text" className='form-name' placeholder='Enter Your Name' />
                                    </div>

                                    <div className="name-form">
                                        <input type="text" className='form-name' placeholder='Enter Your Phone' />
                                    </div>

                                    <div className="name-form">
                                        <input type="text" className='form-name' placeholder='Enter Your Email' />
                                    </div>

                                    <div className="form-textarea">

                                        <textarea cols='52' rows='7' className='textarea' placeholder='Enter Your Message'></textarea>
                                    </div>


                                    <div className="form-btn">
                                        <Buttons text='Submit Application' className='button-form' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="benefits-section">
                    <div className="ben-text">
                        <h2 className="ben-heading">Benefits you get with Quickeat</h2>
                        <p className="ben-para">Suspendisse in est ante in. Duis at consectetur lorem donec massa. Eget lorem dolor sed viverra ipsum. Aliquam id diam maecenas ultricies mi. Nulla facilisi morbi tempus iaculis.</p>
                    </div>
                </div>
            </div>

            <div className="ben-cards-section">
                <div className="ben-card-row">
                    <div data-aos="flip-up" className="ben-card ben-card-1">
                        <div className="ben-card-text">
                            <h4 className="ben-card-heading">
                                <i class="ben-icon fa-solid fa-people-group"></i>
                                Friendly Team
                            </h4>

                            <p className="ben-card-para">
                                Consequat semper viverra nam libero justo laoreet sit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi tincidunt ornare .
                            </p>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div data-aos="flip-up" className="ben-card ben-card-1">
                        <div className="ben-card-text">
                            <h4 className="ben-card-heading">
                                <i class="ben-icon fa-regular fa-calendar-days"></i>
                                Flexible Schedule
                            </h4>

                            <p className="ben-card-para">
                                Consequat semper viverra nam libero justo laoreet sit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi tincidunt ornare .
                            </p>
                        </div>
                    </div>

                    {/* 3rd */}
                    <div data-aos="flip-up" className="ben-card ben-card-1">
                        <div className="ben-card-text">
                            <h4 className="ben-card-heading">
                                <i class="ben-icon fa-solid fa-briefcase"></i>
                                Official Employment
                            </h4>

                            <p className="ben-card-para">
                                Consequat semper viverra nam libero justo laoreet sit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi tincidunt ornare .
                            </p>
                        </div>
                    </div>

                    {/* 4th */}
                    <div data-aos="flip-up" className="ben-card ben-card-1">
                        <div className="ben-card-text">
                            <h4 className="ben-card-heading">
                                <i class="ben-icon fa-solid fa-money-bill-1-wave"></i>
                                Stable Income
                            </h4>

                            <p className="ben-card-para">
                                Consequat semper viverra nam libero justo laoreet sit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi tincidunt ornare .
                            </p>
                        </div>
                    </div>

                    {/* 5th */}
                    <div data-aos="flip-up" className="ben-card ben-card-1">
                        <div className="ben-card-text">
                            <h4 className="ben-card-heading">
                                <i class="ben-icon fa-solid fa-arrow-up-right-dots"></i>
                                Career Growth
                            </h4>

                            <p className="ben-card-para">
                                Consequat semper viverra nam libero justo laoreet sit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi tincidunt ornare .
                            </p>
                        </div>
                    </div>

                    {/* 6th */}
                    <div data-aos="flip-up" className="ben-card ben-card-1">
                        <div className="ben-card-text">
                            <h4 className="ben-card-heading">
                                <i class="ben-icon fa-solid fa-folder-open"></i>
                                Full Insurance
                            </h4>

                            <p className="ben-card-para">
                                Consequat semper viverra nam libero justo laoreet sit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi tincidunt ornare .
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        <SubForm/>
        <Footer/>

        </>
    )
}

export default BecomeApart
