import React from 'react'
import './Singleblog.css'
import Buttons from '../UI/Buttons'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'
import singImg from '../../assets/girl.jpg'
import fullBlog from '../../assets/full-blog.jpg'
import quoteImg from '../../assets/quote.png'
import textImg1 from '../../assets/sgphoto.jpg'
import textImg2 from '../../assets/sgphoto-2.jpg'
import prevImg from '../../assets/prev.jpg'
import nextImg from '../../assets/next.jpg'
import tomImg from '../../assets/thomas.jpg'
import userImg2 from '../../assets/annie.jpg'
import userImg3 from '../../assets/annie-2.jpg'
import userImg4 from '../../assets/annie-3.jpg'

function Singleblog() {
    return (
        <>
            <div className="single-section">
                <div className="current-page">
                    <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="pr-page">Blog</span>  <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">Single Blog Page</span></span>
                </div>

                <div className="single-row">
                    <div className="sing-one">
                        <div className="sing-text">
                            <div className="sing-tags">
                                <a className='tags-blog' href="/food_app">restaurants</a>
                                <a className='tags-blog' href="/food_app">cooking</a>
                            </div>

                            <h2 className="sing-heading">127+ Couriers On Our Team!</h2>

                            <div className="sing-details">
                                <span className='sing-span'> <i className="sing-icons fa-solid fa-calendar-days">
                                </i> 01.Jan.2023</span>
                                <span className="sing-span"> <i className="sing-icons fa-solid fa-eye"></i>  132</span>
                            </div>
                        </div>

                        <div className="sing-img">
                            <img className='sing-blog-img' src={singImg} alt="" />
                            <h6 className="girl-name">Roxie Gilbert</h6>
                            <p className="sing-para">Press Secretary Quickeat</p>
                        </div>
                    </div>

                    <div className="sing-second">
                        <img className='full-blog-img' src={fullBlog} alt="" />
                    </div>
                </div>
            </div>

            <div className="text-section">
                <div className="only-text">
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <span className="color"> incididunt ut labore et</span> dolore magna aliqua. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Id consectetur purus ut faucibus pulvinar elementum integer. <span className="color">Vitae congue mauris</span>  rhoncus aenean vel elit scelerisque. Mollis nunc sed id semper. Ac orci phasellus egestas tellus rutrum tellus pellentesque.
                        <br /><br />
                        Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Enim praesent elementum facilisis leo vel fringilla est. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. At in tellus integer feugiat scelerisque varius. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Auctor urna nunc id cursus metus.</p>
                    <br />
                    <h2 className="text-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>

                    <div className="head-text">
                        <b className="bold-text">Iaculis nunc sed augue lacus viverra.</b>
                        <p className="bold-para">Id consectetur purus ut faucibus pulvinar elementum integer. Vitae congue mauris rhoncus aenean vel elit scelerisque. Mollis nunc sed id semper. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Urna nec tincidunt praesent semper feugiat nibh sed.
                        </p>
                        <br />
                        <b className="bold-text">Enim praesent elementum facilisis leo vel fringilla est.
                        </b>

                        <p className="bold-para">Porta nibh venenatis cras sed felis eget velit aliquet sagittis. At in tellus integer feugiat scelerisque varius. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Auctor urna nunc id cursus metus. Eros donec ac odio tempor orci dapibus ultrices in. Suspendisse sed nisi lacus sed. Sed risus ultricies tristique nulla aliquet. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant</p>
                    </div>

                    <div className="quote-text">
                        <div className="quote-row">
                            <div className="qimg">
                                <img className='quote-img' src={quoteImg} alt="" />
                            </div>

                            <h4 className="quote-heading">Whenever you feel like criticizing any one,» he told me, «just remember that all the people in this world haven’t had the advantages that you’ve had.</h4>
                        </div>
                        <h6 className="quote-name">Francis Scott Key Fitzgerald "The Great Gatsby"</h6>
                    </div>

                    <div className="second-text">
                        <h3 className="heading-3">Massa massa ultricies mi quis hendrerit. Sed enim ut sem viverra aliquet eget sit amet.</h3>

                        <p className="text">Velit egestas dui id ornare arcu odio ut. Lacus suspendisse faucibus interdum posuere lorem ipsum. Commodo sed egestas egestas fringilla phasellus faucibus. Nullam vehicula ipsum a arcu cursus vitae. Nulla facilisi morbi tempus iaculis urna id. Tortor dignissim convallis aenean et. At erat pellentesque adipiscing commodo elit at.</p>
                    </div>

                    <div className="img-row">
                        <div className="img-1">
                            <img className='textImg-1' src={textImg1} alt="" />
                        </div>

                        <div className="img-2">
                            <img className='textImg-2' src={textImg2} alt="" />
                        </div>
                    </div>

                    <div className="third-text">
                        <h4 className="heading-4">Quis imperdiet massa tincidunt nunc pulvinar sapien et. Eu consequat ac felis donec et odio. Platea dictumst quisque sagittis purus.</h4>

                        <p className="text">In fermentum posuere urna nec. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Nisl purus in mollis nunc sed id. At urna condimentum mattis pellentesque id. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Sit amet aliquam id diam.</p>

                        <div className="points">
                            <ul className='points-list'>
                                <li className='list'>In fermentum posuere urna nec;</li>
                                <li className='list'>In cursus turpis massa;</li>
                                <li className='list'>At urna condimentum mattis;</li>
                                <li className='list'>Vestibulum lectus mauris ultrices eros;</li>
                                <li className='list'>Nisl purus in mollis nunc sed id;</li>
                                <li className='list'>IPellentesque habitant morbi tristique.</li>
                            </ul>
                        </div>

                        <div className="fourth-text">
                            <p className="text">At erat pellentesque adipiscing commodo elit. Dignissim enim sit amet venenatis urna cursus eget nunc. Ut ornare lectus sit amet est placerat in egestas erat. Ante metus dictum at tempor. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper.</p>

                            <p className="date">Updated: December 26, 2022</p>
                        </div>
                    </div>

                    <div className="text-tags">
                        <a className='tags-blog' href="/food_app">restaurants</a>
                        <a className='tags-blog' href="/food_app">cooking</a>
                    </div>
                    <hr />
                </div>


            </div>

            <div className="author-section">
                <div className="auth-row">
                    <div className="prev-post">
                        <div className="prev-img">
                            <img src={prevImg} alt="" />
                        </div>
                        <div className="prev-child">
                            <h6 className="same-heading">How Restaurants Can Engage with Millennials in 2022</h6>
                            <a className='auth-link' href="/food_app">Prev. Posts by this author</a>
                        </div>
                    </div>

                    <div className="author">
                        <div className="auth-child">
                            <img src={singImg} alt="" />
                            <h6 className="auth-name">Roxie Gilbert</h6>
                            <p className="auth-para">Press Secretary Quickeat</p>

                            <i className="memb-icons fa-brands fa-facebook-f"></i>
                            <i className="memb-icons fa-brands fa-instagram"></i>
                            <i className="memb-icons fa-brands fa-twitter"></i>
                        </div>
                    </div>

                    <div className="next-post">

                        <div className="next-child">
                            <h6 className="same-heading">How Restaurants Can Engage with Millennials in 2022</h6>
                            <a className='auth-link' href="/food_app">Prev. Posts by this author</a>
                        </div>
                        <div className="next-img">
                            <img src={nextImg} alt="" />
                        </div>

                    </div>
                </div>
            </div>


            <div className="comment-section">
                <div className="comm-head">
                    <h4 className="comm-heading"> <span className="dig-color">9 </span> Comments</h4>
                </div>

                <div className="comment-parent">
                        <div className="main-comm-part">
                            <div className="main-comm">
                                <p className="comm-text">Vitae congue mauris rhoncus aenean vel elit scelerisque. Mollis nunc sed id semper. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Enim praesent elementum facilisis leo vel fringilla est. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. At in tellus integer feugiat scelerisque varius.
                                </p>

                                <p className="reply">Reply <i class="fa-solid fa-reply"></i></p>
                            </div>
                        </div>

                        <div className="comm-user">
                            <div className="comm-user-text">
                                <h4 className="user-name">Jackie Johnson</h4>
                                <p className="comm-date">30.Dec.2022</p>
                            </div>
                            <div className="comm-img">
                                <img className='user-img' src={tomImg} alt="" />
                            </div>
                        </div>

                    {/* 2nd */}
                    <div className="main-comm-part">
                        <div className="main-comm">
                            <p className="comm-text">Auctor urna nunc id cursus metus. Eros donec ac odio tempor orci dapibus ultrices in. Suspendisse sed nisi lacus sed. Sed risus ultricies tristique nulla aliquet.
                            </p>

                            <p className="reply">Reply <i class="fa-solid fa-reply"></i></p>
                        </div>
                    </div>

                    <div className="comm-left">
                        <div className="comm-user-text">
                            <h4 className="user-name">Annie Adamson</h4>
                            <p className="comm-date">30.Dec.2022</p>
                        </div>
                        <div className="comm-img">
                            <img className='user-img' src={userImg2} alt="" />
                        </div>
                    </div>

                    {/* 3rd */}
                    <div className="main-comm-part">
                        <div className="main-comm">
                            <p className="comm-text">Ac felis donec et odio pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies. Tincidunt augue interdum velit euismod. Vitae sapien pellentesque habitant morbi. Feugiat nibh sed pulvinar proin gravida.
                            </p>

                            <p className="reply">Reply <i class="fa-solid fa-reply"></i></p>
                        </div>
                    </div>

                    <div className="comm-left">
                        <div className="comm-user-text">
                            <h4 className="user-name">Annie Adamson</h4>
                            <p className="comm-date">30.Dec.2022</p>
                        </div>
                        <div className="comm-img">
                            <img className='user-img' src={userImg3} alt="" />
                        </div>
                    </div>

                    {/* 4th */}
                    <div className="main-comm-part">
                        <div className="main-comm">
                            <p className="comm-text">Tortor condimentum lacinia quis vel eros donec ac odio tempor. Varius sit amet mattis vulputate enim. Velit egestas dui id ornare arcu odio ut. Lacus suspendisse faucibus interdum posuere lorem ipsum. Commodo sed egestas egestas fringilla phasellus.
                            </p>

                            <p className="reply">Reply <i class="fa-solid fa-reply"></i></p>
                        </div>
                    </div>

                    <div className="comm-left">
                        <div className="comm-user-text">
                            <h4 className="user-name">Annie Adamson</h4>
                            <p className="comm-date">30.Dec.2022</p>
                        </div>
                        <div className="comm-img">
                            <img className='user-img' src={userImg2} alt="" />
                        </div>
                    </div>

                    {/* 5th */}
                    <div className="main-comm-part">
                        <div className="main-comm">
                            <p className="comm-text">Vitae congue mauris rhoncus aenean vel elit scelerisque. Mollis nunc sed id semper. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Enim praesent elementum facilisis leo vel fringilla est. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. At in tellus integer feugiat scelerisque varius.
                            </p>

                            <p className="reply">Reply <i class="fa-solid fa-reply"></i></p>
                        </div>
                    </div>

                    <div className="comm-user">
                        <div className="comm-user-text">
                            <h4 className="user-name">Edgar Johnson</h4>
                            <p className="comm-date">30.Dec.2022</p>
                        </div>
                        <div className="comm-img">
                            <img className='user-img' src={userImg4} alt="" />
                        </div>
                    </div>
                </div>

                <div className="comm-button">
                    <Buttons text='SEE ALL COMMENTS' className='btn-comm' /> 
                </div>
            </div>

            <SubForm/>
            <Footer/>
        </>
    )
}

export default Singleblog
