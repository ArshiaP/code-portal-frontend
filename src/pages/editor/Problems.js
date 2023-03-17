import React from 'react'
import {RxCross2} from 'react-icons/rx'

function Problems() {

  function slideOut() {
    var element = document.querySelector('.problems-sidebar');
    element.classList.remove('show');
  }

  return (
    <div className='problems-sidebar'>
      <RxCross2 className='cross' onClick={slideOut}></RxCross2>

      <div className="question">
        <div className="title">1. question</div>
        <span className="score">points: 100</span>
        <span className="diff">easy</span>
        <hr className='line' />
      </div>
      <div className="question">
        <div className="title">1. question</div>
        <span className="score">points: 100</span>
        <span className="diff">easy</span>
        <hr className='problems-line' />
      </div>
    </div>
  )
}

export default Problems