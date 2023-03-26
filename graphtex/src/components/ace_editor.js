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
    <Box>
      <Box id="example"></Box>
      <AceEditor
        mode="latex"
        theme="dracula"
        onChange={props.updateCode}
        name="example"
        editorProps={{ $blockScrolling: true }}
      />
    </Box>
)
};

export default Editor;