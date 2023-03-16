import React from 'react'
import {ImCross} from 'react-icons/im'

function Problems() {

  function slideOut() {
    var element = document.querySelector('.problems-sidebar');
    element.classList.remove('show');
  }

  return (
    <div className='problems-sidebar'>
      <ImCross className='cross' onClick={slideOut}></ImCross>

      <div className="question">
        <div className="title">1. question</div>
        <span className="score">score: 100</span>
        <span className="diff">easy</span>
      </div>
    </div>
  )
}

export default Problems