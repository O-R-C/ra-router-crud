import PropTypes from 'prop-types'
import styles from './Wrapper.module.css'

export default function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node,
}
