import React from 'react'
import './PricingTable.css'
import Buttons from '../UI/Buttons'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'
import tabImg1 from '../../assets/table1.png'
import tabImg2 from '../../assets/table2.png'
import tabImg3 from '../../assets/table3.png'

function PrcingTable() {
    return (
        <>
            <div className="set-section">
                <div className="about-us">
                    <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">Pricing Table</span></span>
                </div>

                <div className="set-row">
                    <div className="set-text">
                        <h2 className="set-heading">Lunch sets</h2>
                        <p className="set-para">Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Mauris augue neque gravida in fermentum et sollicitudin.</p>
                    </div>
                </div>

                <div className="table-section">
                    <div className="table-row">
                        <div data-aos="flip-up" className="table-parent table-one">
                            <div className="table-top">
                                <div className="table-top-img">
                                    <img className='tab-image' src={tabImg1} alt="" />
                                </div>

                                <div className="table-top-text">
                                    <h6 className="items-quan">
                                        <i class="fa-solid fa-box"></i>
                                        x3
                                    </h6>

                                    <h2 className="top-heading1">
                                        $112
                                        <span className="top-span">/ per week</span>
                                    </h2>

                                    <h3 className="top-heading2">
                                        Small Business Lunch
                                    </h3>
                                </div>
                            </div>

                            <div className="table-bottom">
                                <div className="bottom-text">
                                    <p className="bot-para">Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Amet justo donec enim malesuada diam vulputate ut pharetra.</p>
                                </div>

                                <div className="bot-points">
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Sem et tortor consequat id porta.</h5>
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Facilisis magna etiam tempor.</h5>
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Nec tincidunt praesent semper.</h5>
                                    <h5 className="dull pts"><i class="dull bot-icons fa-solid fa-circle-check"></i> Nibh sed pulvinar proin.</h5>
                                    <h5 className="dull pts"><i class="dull bot-icons fa-solid fa-circle-check"></i> Vulputate mi sit amet mauris.</h5>
                                    <h5 className="dull pts"><i class="dull bot-icons fa-solid fa-circle-check"></i> Elit ut aliquam purus sit amet.</h5>
                                </div>
                            </div>

                            <div className="table-btn">
                                <Buttons text='Order Now' className='btn-table' />
                            </div>
                        </div>

                        {/* 2nd */}
                        <div data-aos="flip-up" className="table-parent table-two">
                            <div className="table-top">
                                <div className="table-top-img">
                                    <img className='tab-image' src={tabImg2} alt="" />
                                </div>

                                <div className="table-top-text">
                                    <h6 className="items-quan">
                                        <i class="fa-solid fa-box"></i>
                                        x3
                                    </h6>

                                    <h2 className="top-heading1">
                                        $112
                                        <span className="top-span">/ per week</span>
                                    </h2>

                                    <h3 className="top-heading2">
                                        Medium Business Lunch
                                    </h3>
                                </div>
                            </div>

                            <div className="table-bottom">
                                <div className="bottom-text">
                                    <p className="bot-para">Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Amet justo donec enim malesuada diam vulputate ut pharetra.</p>
                                </div>

                                <div className="bot-points">
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Sem et tortor consequat id porta.</h5>
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Facilisis magna etiam tempor.</h5>
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Nec tincidunt praesent semper.</h5>
                                    <h5 className=" pts"><i class="bot-icons fa-solid fa-circle-check"></i> Nibh sed pulvinar proin.</h5>
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Vulputate mi sit amet mauris.</h5>
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Elit ut aliquam purus sit amet.</h5>
                                </div>
                            </div>
                            <div className="table-btn">
                                <Buttons text='Order Now' className='btn-table' />
                            </div>
                        </div>

                        {/* 3rd */}
                        <div data-aos="flip-up" className="table-parent table-three">
                            <div className="table-top">
                                <div className="table-top-img">
                                    <img className='tab-image' src={tabImg3} alt="" />
                                </div>

                                <div className="table-top-text">
                                    <h6 className="items-quan">
                                        <i class="fa-solid fa-box"></i>
                                        x3
                                    </h6>

                                    <h2 className="top-heading1">
                                        $112
                                        <span className="top-span">/ per week</span>
                                    </h2>

                                    <h3 className="top-heading2">
                                        Large Business Lunch
                                    </h3>
                                </div>
                            </div>

                            <div className="table-bottom">
                                <div className="bottom-text">
                                    <p className="bot-para">Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Amet justo donec enim malesuada diam vulputate ut pharetra.</p>
                                </div>

                                <div className="bot-points">
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Sem et tortor consequat id porta.</h5>
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Facilisis magna etiam tempor.</h5>
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Nec tincidunt praesent semper.</h5>
                                    <h5 className="pts"><i class="bot-icons fa-solid fa-circle-check"></i> Nibh sed pulvinar proin.</h5>
                                    <h5 className="dull pts"><i class="dull bot-icons fa-solid fa-circle-check"></i> Vulputate mi sit amet mauris.</h5>
                                    <h5 className="dull pts"><i class="dull bot-icons fa-solid fa-circle-check"></i> Elit ut aliquam purus sit amet.</h5>
                                </div>

                                <div className="table-btn">
                                    <Buttons text='Order Now' className='btn-table' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SubForm/>
            <Footer/>
        </>
    )
}

export default PrcingTable
