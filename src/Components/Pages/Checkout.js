import React from 'react'
import './Checkout.css'
import Footer from '../UI/Footer'
import checkImg from '../../assets/cafe-1.jpg'
import mealImg from '../../assets/dish-4.png'
import visaImg from '../../assets/visa.png'
import masterImg from '../../assets/mastercard.png'
import payImg from '../../assets/paypal.png'

function Checkout() {
    return (
        <>
            <div className="check-section">
                <div className="check-current-page">
                    <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="pr-page">Restaurants</span>  <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="pr-page">Restaurant Card</span> <i className="abt-arrow fa-solid fa-arrow-right"></i> <spna className="cr-page">Checkout</spna></span>
                </div>

                <div className="check-first">
                    <div className="check-text">
                        <span className="check-heading">Checkout</span>
                        <p className="check-para">Sit amet nisl purus in mollis nunc sed id semper. Condimentum id venenatis a condimentum vitae sapien pellentesque.</p>
                    </div>
                </div>

                <div className="checkout">
                    <div className="check-row">
                        <div className="check-row-one">
                            <div className="title-checkout">
                                <h3 className="title-heading">Your Order: <span className="title-num">3</span></h3>
                            </div>

                            <div className="check-rest">
                                <img src={checkImg} alt="" className="check-img" />
                                <h6 className="check-rest-name">Kennigton Lane Cafe</h6>
                            </div>

                            <div className="check-meal">
                                <img src={mealImg} alt="" className="check-meal-img" />
                                <h4 className="check-meal-heading">Pasta, kiwi and sauce chilli</h4>
                                <span className="meal-price">$39</span>
                            </div>

                            <div className="check-price">
                                <h3 className="check-price-heading">$39</h3>
                                <div className="check-quan">
                                    <button
                                        className={'dish-btn'}
                                    >
                                        -
                                    </button>

                                    <input type="number" min="0" value='1' readOnly id="dish-input" />

                                    <button className="dish-btn">
                                        +
                                    </button>
                                </div>
                            </div>
                            <hr className='line' />

                            <div className="check-meal">
                                <img src={mealImg} alt="" className="check-meal-img" />
                                <h4 className="check-meal-heading">Pasta, kiwi and sauce chilli</h4>
                                <span className="meal-price">$39</span>
                            </div>

                            <div className="check-price">
                                <h3 className="check-price-heading">$39</h3>
                                <div className="check-quan">
                                    <button
                                        className={'dish-btn'}
                                    >
                                        -
                                    </button>

                                    <input type="number" min="0" value='1' readOnly id="dish-input" />

                                    <button className="dish-btn">
                                        +
                                    </button>
                                </div>
                            </div>
                            <hr className='line' />
                        </div>

                        <div className="check-row-two">
                            <div className="info-parent">
                                <div className="check-info">
                                    <h4 className="info-heading">Buyer Information</h4>
                                    <input type="text" placeholder='Full Name' className='input-big' />
                                    <br />
                                    <input type="email" className="input-small" placeholder='E-mail' />
                                    <input type="number" className="input-small" placeholder='Phone' />
                                </div>
                            </div>

                            <div className="address-parent">
                                <div className="address-info">
                                    <h4 className="address">Delivery addresses</h4>
                                    <select className="check-dropdown">
                                        <option className='drop-option' value="1">California</option>
                                        <option className='drop-option' value="2">California 1</option>
                                        <option className='drop-option' value="3">California 2</option>
                                        <option className='drop-option' value="4">California 3</option>
                                        <option className='drop-option' value="5">California 4</option>
                                    </select>

                                    <input type="text" className="input-big" placeholder='Street' />
                                    <input type="text" className="input-small" placeholder='House number' />
                                    <input type="text" className="input-small" placeholder='Apartment number' />
                                </div>
                            </div>

                            <div className="pay-parent">
                                <div className="pay-info">
                                    <h4 className="check-pay">Payment Method</h4>
                                    <div className="pay-opt">
                                        <h5 className='pay pay-card'>Card</h5>
                                        <h5 className='pay pay-cash'>Cash</h5>
                                    </div>

                                    <div className="pay-imgs">
                                        <img src={visaImg} alt='' className="visa" />
                                        <img src={masterImg} alt='' className="master" />
                                        <img src={payImg} alt='' className="paypal" />
                                    </div>

                                    <input type="number" className="input-big" placeholder='Card Number' />
                                    <br />
                                    <input type="number" className="input-small" placeholder='Expiration Date' />
                                    <input type="number" className="input-small" placeholder='CVV' />
                                </div>
                            </div>

                            <div className="check-btn">
                                <button className="btn-send">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout
