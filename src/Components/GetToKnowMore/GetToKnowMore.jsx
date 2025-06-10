import React from 'react'
import './GetToKnowMore.css'
import sidePhoto from '../../assets/Side_Photo.jpg'

const GetToKnowMore = () => {
  return (
    <div className='GetToKnowMore'>
        <p>Get to Know More</p>
        <h1>About Me</h1>
        <div className="KnowMoreContent">
            <div className="side_photo">
                <img src={sidePhoto} alt="" />
            </div>
        </div>
    </div>
  )
}

export default GetToKnowMore