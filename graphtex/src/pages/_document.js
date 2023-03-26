import { Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='stylesheet' type='text/css' href='http://tikzjax.com/v1/fonts.css'/>
        <Script src="http://tikzjax.com/v1/tikzjax.js"/>        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
