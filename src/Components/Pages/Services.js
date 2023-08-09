import React from 'react'
import './Services.css'
import Buttons from '../UI/Buttons'
import manImg from '../../assets/man-1.jpg'
import cardImg1 from '../../assets/about-1.png'
import cardImg2 from '../../assets/about-2.png'
import cardImg3 from '../../assets/about-3.png'
import cardImg4 from '../../assets/about-4.png'
import off1 from '../../assets/off-1.png'
import off2 from '../../assets/off-2.png'
import off3 from '../../assets/off-3.png'
import off4 from '../../assets/off-4.png'
import card1 from '../../assets/card-1.png'
import card2 from '../../assets/card-2.png'
import card3 from '../../assets/card-3.png'
import manImg2 from '../../assets/man-3.jpg'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'


function Services() {
    return (
        <>
            <div className="service-section">
                <div className="about-us">
                    <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">Services</span></span>
                </div>

                <div className="seerv-row">
                    <div  data-aos="fade-up" className="seerv-row-one">
                        <div className="seerv-text">
                            <h2 className="seerv-heading">Services shows good taste</h2>

                            <p className="seerv-para">Mauris nunc congue nisi vitae suscipit tellus mauris. Ac tincidunt vitae semper quis lectus. Sollicitudin ac orci phasellus egestas tellus.
                            </p>

                            <div className="seerv-button">
                                <Buttons text='SELECT RESTAURANT' className='btn-seerv' />
                            </div>
                        </div>
                    </div>

                    <div  data-aos="fade-up" className="seerv-row-two">
                        <div className="seerv-boxes">
                            <div className="box-1">
                                <img className='seerv-img' src={manImg} alt="" />
                            </div>

                            <div className="box-2">
                                <h2 className="box2-heading">1K +</h2>
                                <p className="box2-para">Food Deliverd</p>
                            </div>

                            <div className="box-3">
                                <h2 className="box3-heading">12</h2>
                                <p className="box3-para">Best Restaurants</p>
                            </div>

                            <div className="box-4">
                                <img className='seerv-img' src={manImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Card Section */}
            <div className="card-section">
                <div className="cards-row">

                    <div data-aos="flip-up" className="card card-1">
                        <div className="card-text">
                            <img className='on' src={cardImg1} alt="" />
                            <img className='off' src={off1} alt="" />
                            <h3 className="card-heading">Free Delivery</h3>
                            <p className="abt-card-para">
                                Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.
                            </p>
                        </div>
                    </div>

                    <div data-aos="flip-up" className="card card-2">
                        <div className="card-text">
                            <img className='on' src={cardImg2} alt="" />
                            <img className='off' src={off2} alt="" />
                            <h3 className="card-heading">Save Your Time</h3>
                            <p className="abt-card-para">
                                Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.
                            </p>
                        </div>
                    </div>

                    <div data-aos="flip-up" className="card card-3">
                        <div className="card-text">
                            <img className='on' src={cardImg3} alt="" />
                            <img className='off' src={off3} alt="" />
                            <h3 className="card-heading">Regular Discounts</h3>
                            <p className="abt-card-para">
                                Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.
                            </p>
                        </div>
                    </div>

                    <div data-aos="flip-up" className="card card-4">
                        <div className="card-text">
                            <img className='on' src={cardImg4} alt="" />
                            <img className='off' src={off4} alt="" />
                            <h3 className="card-heading">Variety Food</h3>
                            <p className="abt-card-para">
                                Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            {/* How it Works */}

            <div className="work-section">
                <div className="work-parent">
                    <div data-aos="fade-up" className="work-text">
                        <span className="work-heading">How It Works</span>
                        <p className="work-para">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate eu scelerisque felis.</p>
                    </div>
                </div>

                <div className="work-cards">
                    <div data-aos="flip-up" className="wk-card wk-card1">
                        <img src={card1} alt="" />
                        <div className="crd-text">
                            <h4 className='cardhm-heading'><span className='work-span'>01</span> Select Restaurant
                            </h4>
                            <p className="card-para">
                                Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non.
                            </p>
                        </div>
                    </div>

                    <div data-aos="flip-up" className="wk-card wk-card2">
                        <img src={card2} alt="" />
                        <div className="crd-text">
                            <h4 className='cardhm-heading'><span className='work-span'>02</span> Select menu</h4>
                            <p className="card-para">
                                Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra diam sit amet.
                            </p>
                        </div>
                    </div>

                    <div data-aos="flip-up" className="wk-card wk-card3">
                        <img src={card3} alt="" />
                        <div className="crd-text">
                            <h4 className='cardhm-heading'><span className='work-span'>03</span> Wait for delivery</h4>
                            <p className="card-para">
                                Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Section */}
            <div className="order-section">
                <div className="order-row">
                    <div  data-aos="fade-up" className="order-img">
                        <img className='man-img' src={manImg2} alt="" />
                    </div>

                    <div  data-aos="fade-up" className="order-text">
                        <h2 className="order-heading">Sit at Home We Will Take Care Your Order</h2>
                        <p className="order-para">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate eu scelerisque felis.</p>

                        <div className="food-items">
                            <div className="food-list">
                                <a className='food-link' href="/food_app"><i class="food-icon fa-solid fa-burger"></i>
                                    Burger
                                </a>
                            </div>

                            <div className="food-list">
                                <a className='food-link' href="/food_app"><i class="food-icon fa-solid fa-drumstick-bite"></i>
                                    Chicken
                                </a>
                            </div>

                            <div className="food-list">
                                <a className='food-link' href="/food_app"><i class="food-icon fa-solid fa-cheese"></i>
                                    Steak
                                </a>
                            </div>

                            <div className="food-list">
                                <a className='food-link' href="/food_app"><i class="food-icon fa-solid fa-pizza-slice"></i>
                                    Pizza
                                </a>
                            </div>

                            <div className="food-list">
                                <a className='food-link' href="/food_app"><i class="food-icon fa-solid fa-fish"></i>
                                    Fish
                                </a>
                            </div>
                        </div>
                        <Buttons text='ORDER NOW' className='btn-order'/>
                    </div>
                </div>
            </div>
            <SubForm/>
            <Footer/>
        </>
    )
}

export default Services
