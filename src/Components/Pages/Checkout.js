import React from 'react'
import './Checkout.css'
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
                        </div>

                        <div className="check-row-two">
                            <h4 className="check-info">
                                <input type="text" placeholder='Full Name' />
                                <br />
                                <input type="email" className="check-email"  placeholder='E-mail'/>
                                <input type="number" className="input-number" placeholder='Phone' />
                            </h4>

                            <h4 className="address">Delivery addresses</h4>
                            <select className="check-dropdown">
                                <option className='drop-option' value="1">California</option>
                                <option className='drop-option' value="2">California 1</option>
                                <option className='drop-option' value="3">California 2</option>
                                <option className='drop-option' value="4">California 3</option>
                                <option className='drop-option' value="5">California 4</option>
                            </select>

                            <h4 className="check-pay">Payment Method</h4>
                            <div className="pay-opt">
                                <h5 className='pay-card'>Card</h5>
                                <h5 className='pay-cash'>Cash</h5>
                            </div>

                            <img src={visaImg} alt=''  className="visa" />
                            <img src={masterImg} alt='' className="master" />
                            <img src={payImg} alt='' className="paypal" />

                            <input type="number"  className="card-number" placeholder='Card Number' />
                            <br />
                            <input type="number"  className="exp-date"  placeholder='Expiration Date'/>
                            <input type="number" className="cvv" placeholder='CVV' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
