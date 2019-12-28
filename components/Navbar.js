import styles from '../styles'

export default () => (
  <header>
    <nav>
      <img src='/logotype.png' alt='Vidregator logo' />
    </nav>
    {process.env.SITE_NAME ? <p>{process.env.SITE_NAME}</p> : null}

    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
      }

      nav {
        flex: 1;
      }

      img {
        display: block;
        height: 42px;
      }

      p {
        ${styles.text.mutedLight}
        ${styles.biggerText}
        text-align: right;
      }
    `}</style>
  </header>
)