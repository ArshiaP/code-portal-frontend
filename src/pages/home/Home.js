import React from 'react'
import Component1 from '../home-component1/Component1'
import Component2 from '../home-component2/Component2'
import './home.css'

function Home() {
  return (
    <div className='home-container'>
      <label class='line-after'><span className='title'>Contests</span></label>
      <Component1/>
      <Component2/>
      <Component1></Component1>
    </div>
  )
}

export default Home