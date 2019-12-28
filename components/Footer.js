import styles from '../styles'

export default () => (
  <footer>
    <img src='/logotype.png' alt='Vidregator logo' />
    <p>
      This site is powered by the open-source project{' '}
      <a href='https://github.com/vidregator/' target='_blank'>Vidregator</a>.{' '}
      All content is provided by the third party that operates this instance.
    </p>

    <style jsx>{`
      footer {
        background-color: #000000;
        margin-top: 40px;
        padding: 36px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
      }

      p {
        ${styles.text.muted}
        text-align: center;
        max-width: 540px;
        margin: 0;
      }

      img {
        display: block;
        height: 32px;
        margin-bottom: 20px;
      }

      a {
        color: #2788FF;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </footer>
)