import React from 'react'
import './Blog.css'
import blogImg from '../../assets/blog-1.png'
import postImg from '../../assets/blog-2.jpg'
import newsImg1 from '../../assets/news-1.jpg'
import newsImg2 from '../../assets/news-2.jpg'
import newsImg3 from '../../assets/news-3.jpg'
import newsImg4 from '../../assets/news-4.jpg'
import newsImg5 from '../../assets/news-5.jpg'
import newsImg6 from '../../assets/news-6.jpg'
import Buttons from '../UI/Buttons'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'

function Blog() {
    const blogs = [
        { image: newsImg1, title: 'With Quickeat you can order food for the whole day' },
        { image: newsImg2, title: '127+ Couriers On Our Team Big Food Trends' },
        { image: newsImg3, title: 'Why You Should Optimize Your Menu for Delivery' },
        { image: newsImg4, title: 'How Restaurants Can Engage with Millennials in 2022' },
        { image: newsImg5, title: 'Why You Should Optimize Your Menu for Delivery' },
        { image: newsImg6, title: '5 Big food Trends Coming Your Way in 2022' },
    ]

    return (
        <>
            <div className="blog-section">
                <div className="about-us">
                    <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">Blog Page</span></span>
                </div>
                <div className="blog-row">
                    <div className="blog-row-one">
                        <div className="blog-text">
                            <h2 className="blog-heading">Current news about Us</h2>
                            <p className="blog-para">Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.
                            </p>
                        </div>
                    </div>

                    <div className="blog-row-two">
                        <img className='blog-img' src={blogImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="post-section">
                <div className="post-parent">
                    <div className="post-row">
                        <div className="post-row-one">
                            <img src={postImg} alt="" className="img-post" />
                        </div>

                        <div className="post-row-two">
                            <div className="post-blog">
                                <h3 className="post-blog-head">We Have Received An Award For The Quality Of Our Work</h3>

                                <p className="post-blog-para">Scelerisque purus semper eget duis at. Tincidunt ornare massa eget egestas purus viverra. Morbi enim nunc faucibus a pellentesque. Lobortis elementum nibh tellus molestie nunc non...</p>

                                <a className='post-link' href="/food_app">Read More <i className="abt-arrow fa-solid fa-arrow-right"></i></a>

                                <div className="post-credits">
                                    <h6 className='credits-heading'> <i className="post-icons fa-solid fa-user"></i> by QuickEat</h6>
                                    <h6 className='credits-date'> <i className="post-icons fa-solid fa-calendar-days"></i> 01.Jan.2023</h6>
                                    <h6 className='credits-view'> <i className="post-icons fa-solid fa-eye"></i> 132</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="news-section">
                <div className="news-blog-row">
                    {blogs.map((blog, index) => (
                        <div className="news-child">
                            <img src={blog.image} alt="" className="img-news" />
                            <h3 className="news-blog-head">{blog.title}</h3>
                            <p className="news-para">Scelerisque purus semper eget duis at. Tincidunt ornare massa eget egestas purus viverra. Morbi enim nunc faucibus a pellentesque. Lobortis elementum nibh tellus molestie nunc non...</p>
                            <a className='post-link' href="/food_app">Read More <i className="abt-arrow fa-solid fa-arrow-right"></i></a>
                            {/* <hr className='line'/> */}
                            <div className="post-credits">
                                <h6 className='credits-heading'> <i className="post-icons fa-solid fa-user"></i> by QuickEat</h6>
                                <h6 className='credits-date'> <i className="post-icons fa-solid fa-calendar-days"></i> 01.Jan.2023</h6>
                                <h6 className='credits-view'> <i className="post-icons fa-solid fa-eye"></i> 132</h6>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="btn-sec">
                    <Buttons text='SEE ALL' className='btn-blog' /> 
                </div>
            </div>

            <SubForm/>
            <Footer/>
        </>
    )
}

export default Blog
