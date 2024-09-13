import PropTypes from 'prop-types'
import styles from './Btn.module.css'

export default function Btn({ title, onClick, deleteProp = false }) {
  return (
    <button
      className={deleteProp ? `${styles.btn} ${styles.delete}` : styles.btn}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

Btn.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  deleteProp: PropTypes.bool,
}
