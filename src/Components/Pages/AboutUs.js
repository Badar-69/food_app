import React from 'react'
import './AboutUs.css'
import abtImg from '../../assets/abt-img.jpg'
import missImg from '../../assets/miss-img.png'
import cardImg1 from '../../assets/about-1.png'
import cardImg2 from '../../assets/about-2.png'
import cardImg3 from '../../assets/about-3.png'
import cardImg4 from '../../assets/about-4.png'
import off1 from '../../assets/off-1.png'
import off2 from '../../assets/off-2.png'
import off3 from '../../assets/off-3.png'
import off4 from '../../assets/off-4.png'
import midImg from '../../assets/mid-img.jpg'
import countImg from '../../assets/count-img.png'
import team1 from '../../assets/team-1.png'
import team2 from '../../assets/team-2.png'
import team3 from '../../assets/team-3.png'
import logo1 from '../../assets/trust-1.png'
import logo2 from '../../assets/trust-2.png'
import logo3 from '../../assets/trust-3.png'
import logo4 from '../../assets/trust-4.png'
import logo5 from '../../assets/trust-5.png'
import tomImg from '../../assets/thomas.jpg'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'


function AboutUs() {
  return (
    <>
      <div className="about-section">
        <div className="about-us">
          <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">About Us</span></span>
        </div>

        <div className="about-row">
          <div className="about-text">
            <h2 className='about-heading'>Nothing to worry about with Quickeat</h2>
            <p className="about-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nemo corporis nihil.
            </p>
          </div>

          <div className="about-img">
            <img className='abt-img' src={abtImg} alt="" />
          </div>
        </div>

      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="mission-row">
          <div className="mission-img">
            <img className='miss-img' src={missImg} alt="" />
          </div>

          <div className="mission-text">
            <h2 className='mission-heading'>Our mission is to save you time</h2>
            <p className="mission-para">
              Viverra vitae congue eu consequat ac felis. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.
              <br /><br />
              Eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt augue interdum velit euismod in pellentesque.
            </p>
          </div>
        </div>

      </div>

      {/* Cards Section */}
      <div className="card-section">
        <div className="cards-row">

          <div className="card card-1">
            <div className="card-text">
              <img className='on' src={cardImg1} alt="" />
              <img className='off' src={off1} alt="" />
              <h3 className="card-heading">Free Delivery</h3>
              <p className="abt-card-para">
                Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.
              </p>
            </div>
          </div>

          <div className="card card-2">
            <div className="card-text">
              <img className='on' src={cardImg2} alt="" />
              <img className='off' src={off2} alt="" />
              <h3 className="card-heading">Save Your Time</h3>
              <p className="abt-card-para">
                Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.
              </p>
            </div>
          </div>

          <div className="card card-3">
            <div className="card-text">
              <img className='on' src={cardImg3} alt="" />
              <img className='off' src={off3} alt="" />
              <h3 className="card-heading">Regular Discounts</h3>
              <p className="abt-card-para">
                Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.
              </p>
            </div>
          </div>

          <div className="card card-4">
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

      {/* Mid Section */}
      <div className="mid-section">
        <div className="mid-row">
          <div className="mid-text">
            <h2 className='mid-heading'>Wait a minute for delicious</h2>
            <p className="mid-para">
              Amet massa vitae tortor condimentum lacinia quis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.
            </p>

            <h6 className="mid-head">Interdum varius sit amet mattis.</h6>

            <ul className="points">
              <li className='point'><i class="check-icon fa-solid fa-circle-check"></i> Interdum varius sit amet mattis;</li>
              <li className='point'><i class="check-icon fa-solid fa-circle-check"></i> Sed elementum tempus egestas sed sed;</li>
              <li className='point'><i class="check-icon fa-solid fa-circle-check"></i> Sit amet purus gravida quis blandit;</li>
              <li className='point'><i class="check-icon fa-solid fa-circle-check"></i> Feugiat pretium nibh ipsum consequat nisl vel pretium.</li>
            </ul>
          </div>

          <div className="mid-img">
            <img className='mid-pic' src={midImg} alt="" />
          </div>
        </div>

      </div>

      {/* Counter Section */}
      <div className="count-section">
        <div className="count-row">
          <div className="count-first">
            <img className='count-img' src={countImg} alt="" />
          </div>

          <div className="count-second">
            <div className="count-flex">
              <div className="counter-1 counter">
                <div className="count-text">
                  <h2 className="count-heading-1">Service shows good taste.</h2>
                </div>
              </div>

              <div className="counter">
                <div className="count-text">
                  <h2 className='count-heading'>976</h2>
                  <p className='count-para'>Satisfied Customer</p>
                </div>
              </div>

              <div className="counter">
                <div className="count-text">
                  <h2 className='count-heading'>12</h2>
                  <p className='count-para'>Best Restaurants</p>
                </div>
              </div>

              <div className="counter">
                <div className="count-text">
                  <h2 className='count-heading'>1K+</h2>
                  <p className='count-para'>Food Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-first">
          <div className="team-text">
            <h2 className="team-heading">Our Team</h2>
            <p className="team-para">Enim lobortis scelerisque fermentum dui faucibus. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Magna ac placerat vestibulum lectus mauris.</p>
          </div>
        </div>

        <div className="team-second">
          <div className="member member-one">
            <img className='team-img' src={team1} alt="" />
            <div className="member-text">
              <h4 className="memb-heading">Kevin Adamson</h4>
              <p className="memb-para">Pellentesque adipiscing commodo elit at imperdiet dui.</p>

              <i className="memb-icons fa-brands fa-facebook-f"></i>
              <i className="memb-icons fa-brands fa-instagram"></i>
              <i className="memb-icons fa-brands fa-twitter"></i>
            </div>
          </div>

          <div className="member member-two">
            <img className='team-img' src={team2} alt="" />
            <div className="member-text">
              <h4 className="memb-heading">Roxie Gilbert</h4>
              <p className="memb-para">Pellentesque adipiscing commodo elit at imperdiet dui.</p>

              <i className="memb-icons fa-brands fa-facebook-f"></i>
              <i className="memb-icons fa-brands fa-instagram"></i>
              <i className="memb-icons fa-brands fa-twitter"></i>
            </div>
          </div>

          <div className="member member-three">
            <img className='team-img' src={team3} alt="" />
            <div className="member-text">
              <h4 className="memb-heading">Edgar Johnson</h4>
              <p className="memb-para">Pellentesque adipiscing commodo elit at imperdiet dui.</p>

              <i className="memb-icons fa-brands fa-facebook-f"></i>
              <i className="memb-icons fa-brands fa-instagram"></i>
              <i className="memb-icons fa-brands fa-twitter"></i>
            </div>
          </div>

        </div>
      </div>


      {/* Trust Section */}
      <div className="trust-parent">
        <div className="trust-section">
          <div className="trust-text">
            <span className='trust-heading'>Our Trusted Partners</span>
          </div>

          <div className="trust-comp">
            <div className="trust-wrap">
              <img className='trust-img' src={logo1} alt="" />
              <p className='trust-name'>Kings Arms</p>
            </div>

            <div className="trust-wrap">
              <img className='trust-img' src={logo2} alt="" />
              <p className='trust-name'>Wilmington</p>
            </div>

            <div className="trust-wrap">
              <img className='trust-img' src={logo3} alt="" />
              <p className='trust-name'>Kennington</p>
            </div>

            <div className="trust-wrap">
              <img className='trust-img' src={logo4} alt="" />
              <p className='trust-name'>The Victoria</p>
            </div>

            <div className="trust-wrap">
              <img className='trust-img' src={logo5} alt="" />
              <p className='trust-name'>The Andevor Arms</p>
            </div>

          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <div className="review-row">
          <div className="rev rev-one">
            <p className='rev-heading'>Service shows good taste.</p>
            <p className="rev-para">Enim lobortis scelerisque fermentum dui faucibus. Tempor commodo ullamcorper a lacus vestibulum sed arcu non.</p>
          </div>

          <div className="rev rev-two">
            <p className="rev-para">"Tortor vitae purus faucibus ornare suspendisse. Ut porttitor leo a diam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ut tortor pretium viverra suspendisse".</p>
            <img src={tomImg} alt="" />
            <span className="rev-name">Thomas Adamson</span>
          </div>

          <div className="rev rev-three">
            <p className="rev-para">"Tortor vitae purus faucibus ornare suspendisse. Ut porttitor leo a diam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ut tortor pretium viverra suspendisse".</p>
            <img src={tomImg} alt="" />
            <span className="rev-name">Thomas Adamson</span>
          </div>
        </div>
      </div>

      <SubForm/>
      <Footer/>
    </>
  )
}

export default AboutUs
