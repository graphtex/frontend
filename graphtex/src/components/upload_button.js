import { Button, Box } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const handleFileUpload = (e, setCode) => {
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
        // 'Content-Type': 'application/json'
      },
      body: data
    }).then(response => response.json())
      .then(data => {
      console.log(`setting code to ${data.code}`)
      // console.log(setCode)
      // setCode(data.code)
      setCode(data.code)
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
      <input type="file" accept=".png" hidden onChange={e => handleFileUpload(e, props.setCode)} />
    </Button>
  )
}