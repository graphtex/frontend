import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import Box from '@mui/material/Box';

import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

const Editor = (props) => {
  return (
    <Box style={{
      width:"700px", height:'540px',display: 'flex', justifyContent:'center', alignItems:'center', background:'#282a36', padding:'20px', borderRadius:'25px'
      }}>
      <AceEditor 
        width='700px'
        height='500px'
        mode="latex"
        theme="dracula"
        fontSize='18px'
        showGutter={false}
        highlightActiveLine={false}
        value={props.value}
        onChange={props.updateCode}
        name="example"
        editorProps={{ $blockScrolling: true }}
      />
    </Box>
)
};

export default Editor;