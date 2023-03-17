import React from 'react'
import { GiTrophy } from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'


function Leaderboard() {

  function hideLeaderboard(){
    document.querySelector('.leaderboard-popup').classList.add('hide');
  }

  return (
    <div className='leaderboard-popup hide' >
      <div className="title">Leaderboard<GiTrophy className='trophy'></GiTrophy></div>
      <hr className='leaderboard-line' />
      <div className='content'>
      <RxCross2 className='leaderboard-cross' onClick={hideLeaderboard}></RxCross2>
        <div className='leaderboard-heading'>
          <div>Rank</div>
          <div>Name</div>
          <div>Points</div>
        </div>
        <div className="details-container">
          <div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div>
          <div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div>
          <div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div><div className="details">
            <div>1</div>
            <div>arshia</div>
            <div>500</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard