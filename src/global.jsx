import { Head } from "minista"
import Header from "@/layouts/Header"
import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer"

import '@/styles'

export default function (props) {
    const {
        children,
        title,
    } = props;

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Chat Window | {title}</title>
        <script src='/src/main.js'  type="module" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
