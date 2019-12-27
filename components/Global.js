import styles from '../styles'
import Head from 'next/head'

export default () => (<>
  <Head>
    <title>Vidregator</title>
    <link rel='icon' href='/favicon.ico' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Karla:400,700&display=swap' />
  </Head>

  <style jsx global>{`
    html {
      ${styles.fullBackground}
      ${styles.backgroundGradient}
      ${styles.text.light}
      ${styles.font}
      height: 100vh;
    }

    body {
      padding: 30px 60px;
      margin: 0 auto;
      max-width: 1400px;
    }
  `}</style>
</>)