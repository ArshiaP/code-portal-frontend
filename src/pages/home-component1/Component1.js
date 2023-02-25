import React from 'react'
import './component1.css'
import {BsCalendar} from 'react-icons/bs'
function Component() {
  return (
    <div className='home-component1-wrapper'>
      <div className='inner'>
        <div className='contest-image'>
          <img classname='image' alt='Image here' />
        </div>
        <div className='contest-details'>
          <div className='title'>Contest Name</div>
          <div className='contest-desc'>
            <p className='desc-child'>If you're using Figma in the browser, you will need to install Figma font service manually. This is a secure background service that allows Figma to access any fonts on your computer and make them available in the font picker</p></div>
          <div className='date'><BsCalendar className='calendar'></BsCalendar>1 pm, 23rd July -  5 pm 25th July</div>
        </div>
      </div>
      <hr className='desc-line'/>
    </div>
  )
}

export default Component