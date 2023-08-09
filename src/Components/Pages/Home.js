import React from 'react'
import Buttons from '../UI/Buttons'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'
import '../Pages/Home.css'
import mainImg from '../../assets/main-1.png'
import smallImg from '../../assets/small-img.jpg'
import card1 from '../../assets/card-1.png'
import card2 from '../../assets/card-2.png'
import card3 from '../../assets/card-3.png'
import cafe1 from '../../assets/cafe-1.jpg'
import cafe2 from '../../assets/cafe-2.jpg'
import cafe3 from '../../assets/cafe-3.jpg'
import favImg from '../../assets/fav-img.png'
import custImg from '../../assets/cust-img.png'
import tomImg from '../../assets/thomas.jpg'
import partImg1 from '../../assets/part-1.jpg'
import partImg2 from '../../assets/part-2.jpg'
import post1 from '../../assets/post-1.jpg'
import post2 from '../../assets/post-2.jpg'
import post3 from '../../assets/post-3.jpg'
import post4 from '../../assets/post-4.jpg'


function Home() {
    const cafeData = [
        { image: cafe1, title: 'Kennington Lane Cafe', tag1: 'american', tag2: 'steakhouse', tag3: 'seafood' },
        { image: cafe2, title: 'The Wilmington', tag1: 'american', tag2: 'steakhouse', tag3: 'seafood' },
        { image: cafe3, title: 'Kings Arms', tag1: 'healthy', tag2: 'steakhouse', tag3: 'vegetarian' },
    ];


    return (
        <>

            <div className="background-image home-container">
                <div className="front-main">
                    <div data-aos="fade-up" className="main-first">
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

                    <div data-aos="fade-up" className="main-second">
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

            {/* Restaurant Section */}

            <div className="rest-section">
                <div className="rest-parent">
                    <div data-aos="flip-up" className="rest-text">
                        <h2 className="rest-heading">
                            12 Best Restaurants in Your City
                        </h2>

                        <p className="rest-para">
                            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate.
                        </p>
                    </div>

                    {cafeData.map((card, index) => (
                        <div data-aos="flip-up" className='cafe-details' key={index}>
                            <div className="cafes">
                                <img className='cafe-img' src={card.image} alt="" />
                                <div className="cafe-text">
                                    <h2 className='cafe-heading'>{card.title}</h2>
                                    <div className="stars">
                                        <i className="star-icon fa-solid fa-star"></i>
                                        <i className="star-icon fa-solid fa-star"></i>
                                        <i className="star-icon fa-solid fa-star"></i>
                                        <i className="star-icon fa-solid fa-star"></i>
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

            {/* Favourtie Section */}
            <div className="fav-section">
                <div data-aos="fade-up" className="fav-first">
                    <img className='fav-img' src={favImg} alt="" />
                </div>

                <div data-aos="fade-up" className="fav-second">
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


            {/* Services Section */}
            <div className="serv-section">
                <div data-aos="flip-up" className="serv-text">
                    <h2 className="serv-heading">Service shows good taste.</h2>
                </div>

                <div data-aos="flip-up" className="serv-block">
                    <div className="block-text">
                        <h2 className='block-heading'>976</h2>
                        <p className='block-para'>Satisfied Customer</p>
                    </div>
                </div>

                <div data-aos="flip-up" className="serv-block">
                    <div className="block-text">
                        <h2 className='block-heading'>12</h2>
                        <p className='block-para'>Best Restaurants</p>
                    </div>
                </div>

                <div data-aos="flip-up" className="serv-block">
                    <div className="block-text">
                        <h2 className='block-heading'>1K+</h2>
                        <p className='block-para'>Food Delivered</p>
                    </div>
                </div>
            </div>

            {/* Customer Section */}
            <div className="cust-section">
                <div className="cust-first">
                    <div data-aos="fade-up" className="cust-text">
                        <span className="cust-heading">
                            What customers say about us
                        </span>
                        <p className="cust-para">
                            "Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Mauris a diam maecenas sed enim. Egestas diam in arcu cursus euismod quis. Quam quisque id diam vel".
                        </p>
                    </div>

                    <div className="thomas">
                        <img className='tom-img' src={tomImg} alt="" />

                        <div className="tom-text">
                            <h6 className='tom-heading'>Thomas Adamson</h6>
                            <i className="star-icon fa-solid fa-star"></i>
                            <i className="star-icon fa-solid fa-star"></i>
                            <i className="star-icon fa-solid fa-star"></i>
                            <i className="star-icon fa-solid fa-star"></i>
                            <i className="star-icon fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>

                </div>

                <div data-aos="fade-up" className="cust-second">
                    <img className='cust-img' src={custImg} alt="" />
                </div>
            </div>

            {/* Partnership section */}

            <div className="part-section">
                <div className="part-text">
                    <span className='part-heading'>Want to Join Partnership?</span>
                </div>

                <div className="part-row">
                    <div data-aos="flip-up" className="part-child part-child-1">
                        <img className='part-Img' src={partImg1} alt="" />

                        <div className="child-text">
                            <h3 className='child-heading'>Join Courier</h3 >
                            <Buttons text='LEARN MORE' className='part-button' />
                        </div>
                    </div>

                    <div data-aos="flip-up" className="part-child part-child-2">
                        <img className='part-Img' src={partImg2} alt="" />

                        <div className="child-text">
                            <h3 className='child-heading'>Join Merchant</h3 >
                            <Buttons text='LEARN MORE' className='part-button' />
                        </div>
                    </div>
                </div>
            </div>

            {/* News Section */}
            <div className="newshm-section">
                <div className="news-head">
                    <span className='news-heading'>Latest news and events</span>
                </div>
                <div className="news-row">
                    <div data-aos="flip-up" className="post-one">
                        <img className='post-Img1' src={post1} alt="" />

                        <div className="post-text">
                            <h3 className='post-heading'>We Have Recieved An Award For The Quality Of Our Work</h3>

                            <p className="post-para">
                                Donec adipiscing tristique risus nec feugiat in fermentum. Sapien eget mi proin sed libero. Et magnis dis parturient montes nascetur. Praesent semper feugiat nibh sed pulvinar proin gravida.
                            </p>

                            <a className='post-link' href="/">Read More</a>
                        </div>

                        <div className="post-credits">
                            <h6 className='credits-heading'> <i className="post-icons fa-solid fa-user"></i> by QuickEat</h6>
                            <h6 className='credits-date'> <i className="post-icons fa-solid fa-calendar-days"></i> 01.Jan.2023</h6>
                            <h6 className='credits-view'> <i className="post-icons fa-solid fa-eye"></i> 132</h6>
                        </div>
                    </div>

                    <div className="post-parent">
                        <div data-aos="flip-up" className="post-comn post-two">
                            <img className='post-comn-img' src={post2} alt="" />

                            <div className="post-info">
                                <a className='post-tags' href="/">restaurants</a>
                                <a className='post-tags' href="/">cooking</a>

                                <h5 className='post-info-head'>With Quickeat you can order food for the whole day
                                </h5>

                                <div className="post-reach">
                                    <h6 className='credits-heading'> <i className="post-icons fa-solid fa-user"></i> by QuickEat</h6>
                                    <h6 className='credits-date'> <i className="post-icons fa-solid fa-calendar-days"></i> 01.Jan.2023</h6>
                                    <h6 className='credits-view'> <i className="post-icons fa-solid fa-eye"></i> 132</h6>
                                </div>
                            </div>
                        </div>

                        <div data-aos="flip-up" className="post-comn post-three">
                            <img className='post-comn-img' src={post3} alt="" />

                            <div className="post-info">
                                <a className='post-tags' href="/">restaurants</a>
                                <a className='post-tags' href="/">cooking</a>

                                <h5 className='post-info-head'>127+ Couriers On Our Team!
                                </h5>

                                <div className="post-reach">
                                    <h6 className='credits-heading'> <i className="post-icons fa-solid fa-user"></i> by QuickEat</h6>
                                    <h6 className='credits-date'> <i className="post-icons fa-solid fa-calendar-days"></i> 01.Jan.2023</h6>
                                    <h6 className='credits-view'> <i className="post-icons fa-solid fa-eye"></i> 132</h6>
                                </div>
                            </div>
                        </div>

                        <div data-aos="flip-up" className="post-comn post-four">
                            <img className='post-comn-img' src={post4} alt="" />

                            <div className="post-info">
                                <a className='post-tags' href="/">restaurants</a>
                                <a className='post-tags' href="/">cooking</a>

                                <h5 className='post-info-head'>Why You Should Optimize Your Menu for Delivery
                                </h5>

                                <div className="post-reach">
                                    <h6 className='credits-heading'> <i className="post-icons fa-solid fa-user"></i> by QuickEat</h6>
                                    <h6 className='credits-date'> <i className="post-icons fa-solid fa-calendar-days"></i> 01.Jan.2023</h6>
                                    <h6 className='credits-view'> <i className="post-icons fa-solid fa-eye"></i> 132</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SubForm />
            <Footer />

        </>
    )
}

export default Home
