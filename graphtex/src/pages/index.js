import { useState } from "react"
import dynamic from 'next/dynamic'

import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Box from '@mui/material/Box';

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
        <title>graphtex</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <p>Easily create latex diagrams for graphs</p>
        <p>Upload your image (.png) file here</p>
      </main>
      <div>
        <UploadButton/>
        <Box>
          <Ace
            updateCode={updateCode}
          />
        </Box>
      </div>
      
    </>
  )
}
