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
    <Box style={{width:"1100px", height:'600px'}}>
      <AceEditor
        width='1000px'
        height='500px'
        mode="latex"
        theme="dracula"
        fontSize='18px'
        showGutter={false}
        highlightActiveLine={false}
        onChange={props.updateCode}
        name="example"
        editorProps={{ $blockScrolling: true }}
      />
    </Box>
)
};

export default Editor;