import { Html, Head, Main, NextScript } from 'next/document'
import Topbar from '@/components/Global/Topbar'
import Navbar from '@/components/Global/Navbar'
import Footer from '@/components/Global/Footer'
export default function Document() {
  return (
    <Html lang="en" dir="rtl">
    <Head>

    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  )
}
