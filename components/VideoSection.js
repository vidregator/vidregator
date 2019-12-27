import styles from '../styles'
import VideoCard from './VideoCard'

export default ({ name, videos }) => (
  <section>
    <h2>{name}</h2>
    <div className='videos'>
      {videos.map((video) => (
        <VideoCard
          image={video.image}
          name={video.name}
          tags={video.tags}
          url={video.url}
          key={video.url}
        />
      ))}
    </div>

    <style jsx>{`
      h2 {
        ${styles.text.mutedLight}
        ${styles.biggerText}
        margin: 0;
        margin-bottom: 18px;
      }

      .videos {
        ${styles.grid}
      }
    `}</style>
  </section>
)