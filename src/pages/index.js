import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

import { Uploader } from "uploader" // Installed by "react-uploader".
import { UploadButton } from "react-uploader"
import React, { useState } from "react"

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
})

// Configuration options: https://upload.io/uploader#customize

const options = { multi: true }

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [hasUploaded, setHasUploaded] = useState(false)

  return (
    <>
      <Head>
        <title>graphtex</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <p>Easily create latex diagrams for graphs</p>
        <p>Upload your image (.png) file here</p>
        <div>
          <UploadButton
            uploader={uploader}
            options={options}
            onComplete={function (files) {
              setHasUploaded(true)
              console.log(files.map((f) => f.fileUrl).join("\n")) // assume only one file is uploaded
            }}
          >
            {({ onClick }) => (
              <button onClick={onClick}>Upload a file...</button>
            )}
          </UploadButton>
        </div>
        {hasUploaded ? (
          <div>File has been uploaded</div>
        ) : (
          // wait for callback from our backend server, which send back latex code.
          // It is then the front end's responsibility to format this code + render the tex.
          <></>
        )}
      </main>
    </>
  )
}
