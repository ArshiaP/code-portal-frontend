import React from 'react'
import './editor.css'
import { AiOutlineUnorderedList, AiOutlineTrophy } from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'

function Editor() {
  return (
    <div className='editor-outer'>
      <div className='editor-container'>
        <div className="left">
          <div className="title">1. Problem Name</div>
          <div className='details'>
            <span className='difficulty'> Easy </span>
            <span className='score'>Points : 100</span>
          </div>
          <div className="description">
            If you're using Figma in the browser, you will need to install Figma font service manually. This is a secure background service that allows Figma to access any fonts on your computer and make them available in the font picker
          </div>
          <div className='sample'>Sample Example : </div>
          <div className='sample-desc'>
            <div className='input'>Input : nums = [2,7,11,15], target = 9</div>
            <div className='output'>Output : [0,1]</div>
          </div>
          <div className='sample'>Constraints : </div>
          <div className='sample-desc'>
            <div>1 &lt;= N &lt;= 10<sup>5</sup></div>
            <div> 1 &lt;= Ai &lt;= 10<sup>9</sup></div>
          </div>
        </div>
        <div className="right">

        </div>
      </div>
      <div className='foot'>
        <div className='child1'>
          <div className='problems'><AiOutlineUnorderedList className='list' />Problems</div>
          <div className='leaderboard'><AiOutlineTrophy className='list' />Leaderboard</div>
        </div>
        <div className='child2'>
          <div className='status'> Status : <span className='status-deets'>Accepted</span></div>
          <div className='submit'><BsCodeSlash className='code'/>Submit</div>
        </div>
      </div>
    </div>
  )
}

export default Editor