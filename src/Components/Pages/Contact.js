import React from 'react'
import './Contact.css'
import conImg from '../../assets/contacts-1.png'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'

function Contact() {
    return (
        <>
            <div className="contact-section">
                <div className="about-us">
                    <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">Contacts</span></span>
                </div>

                <div className="contact-row">
                    <div className="contact-row-one">
                        <div className="contact-text">
                            <h2 className="contact-head">Contact Us</h2>
                            <p className="contact-para">Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.</p>
                        </div>

                        <div className="contact-info">
                            <div className="con-address">
                                <div className="add-text">
                                    <i class="add-icon fa-solid fa-location-dot"></i>
                                    <h5 className="add-heading">1717 Harrison St, San Francisco, CA 94103, United States</h5>
                                </div>
                            </div>

                            <div className="con-address">
                                <div className="add-text">
                                    <i class="add-icon fa-solid fa-envelope"></i>
                                    <h6 className="add-small">quick.info@mail.net</h6>
                                    <p className="add-para">Lorem ipsum dolor sit.</p>

                                    <h6 className="add-small">quick.info@mail.net</h6>
                                    <p className="add-para">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>

                            <div className="con-address">
                                <div className="add-text">
                                    <i class="add-icon fa-solid fa-phone"></i>
                                    <h6 className="add-small">+1 425 326 16 27</h6>
                                    <p className="add-para">Et netus et malesuada</p>

                                    <h6 className="add-small">+1 425 326 16 27</h6>
                                    <p className="add-para">Et netus et malesuada</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-row-two">
                        <img className='contact-img' src={conImg} alt="" />
                    </div>
                </div>
            </div>

            <SubForm/>
            <Footer/>
        </>
    )
}

export default Contact
