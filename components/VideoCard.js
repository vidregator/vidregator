import styles from '../styles'

export default ({ name, image, tags, url }) => (
  <article>
    <a href={url}>
      {image && <img src={image} alt={`${name} thumbnail`} />}
      <h1>{name}</h1>
      {tags && <p>{tags.map((tag) => `#${tag}`).join(' ')}</p>}
    </a>

    <style jsx>{`
      article {
        height: fit-content;
      }

      a {
        ${styles.surface}
        ${styles.thiccable}
        text-decoration: none;
        padding: 22px;
        display: block;
        outline: none;
      }

      a:hover {
        ${styles.thicc}
      }

      a:hover:active {
        ${styles.notThicc}
      }

      img {
        width: 100%;
        display: block;
        border-radius: 4px;
        margin-bottom: 8px;
      }

      h1 {
        font-size: 1rem;
      }

      h1, p {
        margin: 0;
      }

      p {
        margin-top: 8px;
        ${styles.text.muted}
      }
    `}</style>
  </article>
)