import { Button, Box } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const handleFileUpload = (e) => {
  if (!e.target.files) {
    return;
  }
  const file = e.target.files[0];
  const { name } = file;

  let data = new FormData()
  data.append('img', file)

  fetch("http://0.0.0.0:5000/", {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: {'abc': 123}
    })
};


export default function UploadButton (props) {
  return (
    <Button
      component="label"
      variant="outlined"
      startIcon={<UploadFileIcon />}
      sx={{ marginRight: "1rem" }}
    >
      Upload Image
      <input type="file" accept=".png" hidden onChange={handleFileUpload} />
    </Button>
  )
}