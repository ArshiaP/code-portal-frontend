import React from 'react'
import Navbar from '../navbar/Navbar'
import './dashboard.css'

//CHECK TABLE

function Dashboard() {
  return (
    <div className='db-container'>
      <Navbar/>
      <label class='line-after'><span className='title'>User Dashboard</span></label>
      <div className='flex-box'>
        <div className='details-box'>
          <div className='inner'>
            <div className='info-desc'>
              <span className='info-title'>name : </span>
              <span className='info'>Arshia Puthran</span>
            </div>
            <br />
            <div className='info-desc'>
              <span className='info-title'>username : </span>
              <span className='info'>arshiap</span>
            </div>
            <br />
            <div className='info-desc'>
              <span className='info-title'>college : </span>
              <span className='info'>MIT</span>
            </div>
            <br />
            <div className='info-desc'>
              <span className='info-title'>phone : </span>
              <span className='info'>123456789</span>
            </div>
            <br />
            <div className='info-desc'>
              <span className='info-title'>email : </span>
              <span className='info'>ap@gmail.com</span>
            </div>
            <div className="button">
              Logout
            </div>
          </div>
          <div class="vertical-line"></div>
        </div>
        <div className='statistics'>
          <div className='inner-2'>
            <div className="row-head">
              <div className="table-head">Contest</div>
              <div className="table-head">Rank</div>
              <div className="table-head">Score</div>
            </div>
            <div className="contest-data">
              <div className="contest-name">arshia</div>
              <div className="rank">1</div>
              <div className="score">100</div>
            </div>
            <div className="contest-data">
              <div className="contest-name">arshia</div>
              <div className="rank">1</div>
              <div className="score">100</div>
            </div>
            <div className="contest-data">
              <div className="contest-name">arshia</div>
              <div className="rank">1</div>
              <div className="score">100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard