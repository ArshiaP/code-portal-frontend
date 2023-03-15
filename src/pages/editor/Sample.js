import React from 'react';
import AceEditor from 'react-ace';

// Import the language mode for C and C++
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';

// Import the GitHub Dark theme
import 'ace-builds/src-noconflict/theme-tomorrow_night';
// Import the C++ language tools module for autocompletion
import 'ace-builds/src-noconflict/ext-language_tools';

function Sample() {
  const [code, setCode] = React.useState('');

  return (
    <AceEditor
      className='custom-editor'
      mode="c_cpp" // Set the mode to C and C++
      theme="tomorrow_night"
      value={code}
      onChange={setCode}
      name="my-editor"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
      style={{  width: '100%', height:'calc(100vh - 100px)',
      maxHeight: 'calc(100vh - 100px)', fontSize : '16px !important' }}
    />
  );
}

export default Sample