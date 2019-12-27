import styles from '../styles'
import { Search } from 'react-feather'

export default ({ value, onChange, placeholder }) => (
  <div className='container'>
    <div className='icon'><Search width={20} /></div>
    <input
      type='search'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />

    <style jsx>{`
      .container {
        position: relative;
        display: flex;
        align-items: center;
      }
    
      input {
        ${styles.surface}
        ${styles.inputReset}
        ${styles.biggerText}
        width: 100%;
        padding-left: 52px;
      }

      .icon {
        ${styles.text.muted}
        position: absolute;
        padding-left: 22px;
        pointer-events: none;
      }

      ::placeholder {
        ${styles.text.muted}
      }

      input::-webkit-search-decoration,
      input::-webkit-search-cancel-button,
      input::-webkit-search-results-button,
      input::-webkit-search-results-decoration {
        -webkit-appearance:none;
      }
    `}</style>
  </div>
)