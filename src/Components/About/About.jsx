import React from 'react'
import './About.css'
import profile_photo from "../../assets/profile_photo.jpg"
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const About = () => {
  return (
    <div className="about">
      <div className="photo">
        <img src={profile_photo} alt="" height="400px" />
      </div>
      <div className="info">
        <p className='p1'>Hello,I'm</p>
        <h1>Dhruv Choudhary</h1>
        <p className='p2'>Full Stack Developer</p>
        <div className="btn">
          <button className='cv'>Download CV</button>
          <button className='contact_info'>Contact Info</button>
        </div>
        <div className="social_container">
          <a href="https://iitgn.ac.in" target="_blank" rel="opener" >
            <img src={linkedin} alt="LinkedIn Profile" />
          </a>
          <img src={github} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About