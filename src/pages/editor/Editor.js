import React from 'react'
import './editor.css'
import Navbar from '../navbar/Navbar'
import QuestionDetails from './QuestionDetails'
import QuestionFooter from './QuestionFooter'
import Sample from './Sample'

function Editor() {
  return (
    <div className='editor-outer'>
      <Navbar />
      <div className='editor-container'>
        <QuestionDetails />
        <div className="right">
          <Sample/>
        </div>
      </div>
        <QuestionFooter />
    </div>
  )
}

export default Editor