import React from 'react'
import './Footer.css'
import logo2 from '../../assets/logo2.png'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="foot-row">
                    <div className="foot-1">
                        <div className="foot-description">
                            <div className="foot-comp">
                                <img className='foot-logo' src={logo2} alt="Dish" />
                                <p className='foot-name'>QUICK<span className='foot-lName'>EAT</span></p>
                            </div>

                            <h3 className='foot-heading'>The Best Restaurants in Your Home</h3>
                            <p className="foot-para">Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus pretium quam.
                            </p>
                        </div>
                    </div>

                    <div className="foot-2">
                        <div className="foot-text">
                            <h3 className='foot-menu'>MENU</h3>
                            <a className='foot-links' href="/">Home <i className="arrow fa-solid fa-arrow-right"></i>
                            </a>
                            <a className='foot-links' href="/">About Us <i className="arrow fa-solid fa-arrow-right"></i></a>
                            <a className='foot-links' href="/">Restaurants <i className="arrow fa-solid fa-arrow-right"></i></a>
                            <a className='foot-links' href="/">Contacts <i className="arrow fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="foot-3">
                        <div className="foot-text">
                            <h3 className='foot-menu'>Contacts</h3>
                            <p className="foot-contact">1717 Harrison St, San Francisco, CA 94103, United States</p>
                            <hr />
                            <p className="foot-contact">quickeat@mail.net</p>
                            <p className="foot-contact">+1 425 326 16 27</p>
                            <i className="foot-icons fa-brands fa-facebook-f"></i>
                            <i className="foot-icons fa-brands fa-instagram"></i>
                            <i className="foot-icons fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
