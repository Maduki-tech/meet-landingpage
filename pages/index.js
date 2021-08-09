import Head from 'next/head'
import Image from 'next/image'

import Header from './components/Header'
import Pictures from './components/Pictures'
import Text from './components/Text'
import Footer from './components/footer'

export default function Home() {
  return (



    <div >
      <Head>
        <title>Meet-landing-Page</title>
      </Head>

      <Header />
      <Pictures />
      <Text />
      <Footer />
    </div>
  )
}
