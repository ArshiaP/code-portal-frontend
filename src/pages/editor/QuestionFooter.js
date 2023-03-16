import React from 'react'
import './editor.css'
import { AiOutlineUnorderedList, AiOutlineTrophy } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import SelectLang from './SelectLang'

function QuestionFooter({lang, setLang}) {

  function slideIn() {
    var element = document.querySelector('.problems-sidebar');
    element.classList.add('show');
  }

  return (
    <div className='foot'>
      <div className='child1'>
        <div className='problems' onClick={slideIn}><AiOutlineUnorderedList className='list' />Problems</div>
        <div className='leaderboard'><AiOutlineTrophy className='list' />Leaderboard</div>
      </div>
      <div className='child2'>
        <SelectLang lang={lang} setLang={setLang}></SelectLang>
        <div className='status'> Status : <span className='status-deets'>Accepted</span></div>
        <div className='submit'><BsCodeSlash className='code' />Submit</div>
      </div>
    </div>
  )
}

export default QuestionFooter