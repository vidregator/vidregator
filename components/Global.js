import styles from '../styles'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default ({ children }) => (
  <div className='container'>
    <Head>
      <title>Vidregator</title>
      <link rel='icon' href='/logo.png' />
      <link rel='shortcut icon' href='/logo.png' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Karla:400,700&display=swap' />
    </Head>
    
    <div className='inner-container'>
      <Navbar />
      <main>{children}</main>
    </div>
    <Footer />

    <style jsx>{`
      .container {
        position: relative;
        min-height: 100vh;
      }

      .inner-container {
        padding: 30px 60px;
        margin: 0 auto;
        max-width: 1400px;
        box-sizing: border-box;
      }
    `}</style>
    <style jsx global>{`
      html {
        ${styles.fullBackground}
        ${styles.backgroundGradient}
        ${styles.text.light}
        ${styles.font}
        height: 100vh;
      }

      body {
        margin: 0;
      }
    `}</style>
  </div>
)