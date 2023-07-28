import React from 'react'
import './Singleblog.css'
import singImg from '../../assets/girl.jpg'
import fullBlog from '../../assets/full-blog.jpg'

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
                    </p><br />
                    Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Enim praesent elementum facilisis leo vel fringilla est. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. At in tellus integer feugiat scelerisque varius. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Auctor urna nunc id cursus metus.
                </div>
            </div>
        </>
    )
}

export default Singleblog
