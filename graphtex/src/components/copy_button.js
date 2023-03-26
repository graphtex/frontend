import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from "react"
import { IconButton, Snackbar } from "@mui/material";


const CopyToClipboardButton = (props) => {
    const [open, setOpen] = useState(false);
  
    const handleClick = (text) => {
      setOpen(true);
      navigator.clipboard.writeText(text);
    };
  
    return (
      <>
        <IconButton onClick={() => handleClick(props.text)} color="primary">
          <ContentCopyIcon backgroundColor='white'/>
        </IconButton>
        <Snackbar
          message="Copied to clipboard"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={1000}
          onClose={() => setOpen(false)}
          open={open}
        />
      </>
    );
  };
  
  export default CopyToClipboardButton;
  