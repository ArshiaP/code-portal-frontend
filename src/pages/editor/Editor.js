import React, { useState } from 'react'
import './editor.css'
import Navbar from '../navbar/Navbar'
import QuestionDetails from './QuestionDetails'
import QuestionFooter from './QuestionFooter'
import Sample from './Sample'
import SelectLang from './SelectLang'
import Problems from './Problems'
import Leaderboard from './Leaderboard'


function Editor() {
  const [lang, setLang] = useState('c_cpp')

  return (
    <>
      <div className='editor-outer'>
        <Navbar />
        <div className='editor-container'>
          <QuestionDetails />
          <div className="right">
            <Sample lang={lang} />
          </div>
        </div>
        <QuestionFooter lang={lang} setLang={setLang} />
        <Problems></Problems>
      </div>
      <Leaderboard></Leaderboard>
    </>
  )
}

export default Editor