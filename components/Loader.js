import { Loader } from 'react-feather'
import useTimedBoolean from '../lib/useTimedBoolean'

export default () => {
  const visible = useTimedBoolean()

  return (
    <div>
      {visible ? <Loader size={42} className='icon' /> : null}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        div :global(.icon) {
          margin: 0 auto;
          display: block;
          animation: spin 2s linear infinite;
        }
      `}</style>
    </div>
  )
}