

import Script from 'next/script'
import Box from '@mui/material/Box';
import NoSSR from 'react-no-ssr';



const tikzcode = `
\\begin{tikzpicture}
\\draw (0,0) circle (1in);
\\end{tikzpicture}
`

function TikzDisplay(props) {
  console.log("ATTEMPT RENDER")
  // const { code } = props
  const code = tikzcode
  console.log(code)
  return (
    <NoSSR>
      <p>{code}</p>
      <script type='text/tikz'>{code}</script>
    </NoSSR>
  )
}

export default TikzDisplay