import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

import { Uploader } from "uploader" // Installed by "react-uploader".
import { UploadButton } from "react-uploader"

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
})

// Configuration options: https://upload.io/uploader#customize

const options = { multi: true }

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
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
        <UploadButton
          uploader={uploader}
          options={options}
          onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
        >
          {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
        </UploadButton>
      </div>
    </>
  )
}
