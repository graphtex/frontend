import { useState } from "react"
import dynamic from 'next/dynamic'

import Head from "next/head"
import Logo from "../components/logo"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Box from '@mui/material/Box';
import NavBar from '../components/navbar'
import UploadButton from '../components/upload_button'
const Ace = dynamic(
  () => import("../components/ace_editor"),
  { ssr: false }
)
// Configuration options: https://upload.io/uploader#customize

const options = { multi: true }

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [code, setCode] = useState('hello world')

  const updateCode = code => {
    setCode(code)
  }
  return (
    <>
      <Head>
        <title>GraphTeX</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <NavBar/>
      <main className={styles.main}>
        <h2 style={{marginTop: '-60px', fontFamily: 'Lato'}}>Convert Graph Drawings to TikZ!</h2>
        <p>&nbsp;</p>
        <UploadButton setCode={updateCode}/>
        <p>&nbsp;</p>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}>
          <Ace
            width='700px'
            height='500px'
            fontsize='16px'
            value = {code}
            updateCode={updateCode}
            justifyContent='center'
          />
        </Box>
        {/* <p style={{marginTop: '20px'}}>Easily create TikZ diagrams for graphs in LaTeX</p> */}
        {/* <p>Upload your image (.png) file here</p> */}
      </main>
      <div>
        
        
      </div>
      
    </>
  )
}
