import React from 'react'
import Navbar from '../UI/Navbar'
import Buttons from '../UI/Buttons'
import mainImg from '../../assets/main-1.png'
import smallImg from '../../assets/small-img.jpg'
import card1 from '../../assets/card-1.png'
import card2 from '../../assets/card-2.png'
import card3 from '../../assets/card-3.png'
import cafe1 from '../../assets/cafe-1.jpg'
import cafe2 from '../../assets/cafe-2.jpg'
import cafe3 from '../../assets/cafe-3.jpg'
import favImg from '../../assets/fav-img.png'
import '../Pages/Home.css'

function Home() {
    const cafeData = [
        { image: cafe1, title: 'Kennington Lane Cafe', tag1: 'american', tag2: 'steakhouse', tag3: 'seafood' },
        { image: cafe2, title: 'The Wilmington', tag1: 'american', tag2: 'steakhouse', tag3: 'seafood' },
        { image: cafe3, title: 'Kings Arms', tag1: 'healthy', tag2: 'steakhouse', tag3: 'vegetarian' },
    ];



    return (
        <>
            <Navbar />

            <div className="front-main">
                <div className="main-first">
                    <div className="main-text">
                        <span className="main-heading">
                            The Best Restaurants In Your Home
                        </span>
                        <p className="main-para">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cam, earum accusantium. Dicta.
                        </p>
                    </div>

                    <div className="dropdown">
                        <select name="" id="dropdown">
                            <option className='options' value="0">Choose a Restaurant</option>
                            <option className='options' value="1">Choose a Restaurant 1</option>
                            <option className='options' value="2">Choose a Restaurant 2</option>
                            <option className='options' value="3">Choose a Restaurant 3</option>
                            <option className='options' value="4">Choose a Restaurant 4</option>
                        </select>
                        <Buttons text='ORDER NOW' className='nav-button' />
                    </div>
                </div>

                <div className="main-second">
                    <div className="main-location">
                        <i className="locate-icon fa-solid fa-location-dot"></i>
                        <div className="main-locate-text">
                            <span className='main-rest'>12 Restaurants</span>
                            <p className='main-city'>In Your City</p>
                        </div>
                    </div>

                    <div className="main-restaurant">
                        <img className='small-img' src={smallImg} alt="" />
                        <div className="willmington-text">
                            <p className='main-city'>Restaurant of the Month</p>
                            <span className='main-rest'>The Wilmington</span>
                            <div className="stars">
                                <i className="star-icon fa-solid fa-star"></i>
                                <i className="star-icon fa-solid fa-star"></i>
                                <i className="star-icon fa-solid fa-star"></i>
                                <i className="star-icon fa-solid fa-star"></i>
                                {/* <i className="star-icon fa-solid fa-star"></i> */}
                                <i className="star-icon fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                    </div>
                    <img className='main-img' src={mainImg} alt="" />
                </div>
            </div>

            {/* How it Works */}

            <div className="work-section">
                <div className="work-parent">
                    <div className="work-text">
                        <span className="work-heading">How It Works</span>
                        <p className="work-para">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate eu scelerisque felis.</p>
                    </div>
                </div>

                <div className="work-cards">
                    <div className="wk-card wk-card1">
                        <img src={card1} alt="" />
                        <div className="card-text">
                            <h4 className='card-heading'><span className='work-span'>01</span> Select Restaurant
                            </h4>
                            <p className="card-para">
                                Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non.
                            </p>
                        </div>
                    </div>

                    <div className="wk-card wk-card2">
                        <img src={card2} alt="" />
                        <div className="card-text">
                            <h4 className='card-heading'><span className='work-span'>02</span> Select menu</h4>
                            <p className="card-para">
                                Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra diam sit amet.
                            </p>
                        </div>
                    </div>

                    <div className="wk-card wk-card3">
                        <img src={card3} alt="" />
                        <div className="card-text">
                            <h4 className='card-heading'><span className='work-span'>03</span> Wait for delivery</h4>
                            <p className="card-para">
                                Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rest-section">
                <div className="rest-parent">
                    <div className="rest-text">
                        <h2 className="rest-heading">
                            12 Best Restaurants in Your City
                        </h2>

                        <p className="rest-para">
                            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate.
                        </p>
                    </div>

                    {cafeData.map((card, index) => (
                        <div className='cafe-details' key={index}>
                            <div className="cafes">
                                <img className='cafe-img' src={card.image} alt="" />
                                <div className="cafe-text">
                                    <h2 className='cafe-heading'>{card.title}</h2>
                                    <div className="stars">
                                        <i className="star-icon fa-solid fa-star"></i>
                                        <i className="star-icon fa-solid fa-star"></i>
                                        <i className="star-icon fa-solid fa-star"></i>
                                        <i className="star-icon fa-solid fa-star"></i>
                                        {/* <i className="star-icon fa-solid fa-star"></i> */}
                                        <i className="star-icon fa-solid fa-star-half-stroke"></i>
                                    </div>

                                    <a className='cafe-tags' href="/">{card.tag1}</a>
                                    <a className='cafe-tags' href="/">{card.tag2}</a>
                                    <a className='cafe-tags' href="/">{card.tag3}</a>

                                    <p className="cafe-para">Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="rest-button">
                    <Buttons text='SEE ALL' className='cf-button' />
                </div>

            </div>


            <div className="fav-section">
                <div className="fav-first">
                    <img className='fav-img' src={favImg} alt="" />
                </div>

                <div className="fav-second">
                    <div className="fav-text">
                        <span className="fav-heading">
                        Food from your favorite restaurants to your table
                        </span>
                        <p className="fav-para">
                        Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec massa sapien faucibus et molestie. Vitae elementum curabitur vitae nunc.
                        </p>
                    </div>


                    <Buttons text='ORDER NOW' className='fav-button' />

                </div>


            </div>

        </>
    )
}

export default Home
