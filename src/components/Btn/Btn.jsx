import PropTypes from 'prop-types'
import styles from './Btn.module.css'

export default function Btn({ title }) {
  return <button className={styles.btn}>{title}</button>
}

Btn.propTypes = {
  title: PropTypes.string,
}
