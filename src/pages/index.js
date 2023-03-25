import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

import { Uploader } from "uploader" // Installed by "react-uploader".
import { UploadButton } from "react-uploader"
import React, { useState } from "react"

/* variables needed for the drag and drop component */
const uploader = Uploader({
  apiKey: "free", //
})
const options = { multi: true }

const inter = Inter({ subsets: ["latin"] })

/* main function */
export default function Home() {
  const [hasUploaded, setHasUploaded] = useState(false)
  const [text, setText] = useState("wubbalubadubdub")

  return (
    <>
      <Head>
        <title>graphtex</title>
      </Head>
      <main className={styles.main}>
        <p>
          Easily create latex diagrams for graphs. Upload your image (.png) file
          here
        </p>
        <div>
          <UploadButton
            uploader={uploader}
            options={options}
            onComplete={function (files) {
              setHasUploaded(true)
              fetch("http://localhost:5000/", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({ url: files[0] }),
              })
                .then((response) => response.json())
                .then((data) => setText(JSON.stringify(data)))
                .catch((err) => console.log(err.message))
              console.log("upload completed")
            }}
          >
            {({ onClick }) => <button onClick={onClick}>Get Started</button>}
          </UploadButton>
        </div>
        <p>{text}</p>

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
