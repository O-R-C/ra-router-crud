import PropTypes from 'prop-types'
import moment from 'moment/min/moment-with-locales'

moment.locale('ru')

import styles from './Card.module.css'

export default function Card({ author, content, createdAt }) {
  return (
    <div className={styles.container}>
      <h3>
        {author} <span className={styles.date}> - {moment(createdAt).fromNow(true)}</span>
      </h3>
      <p>{content}</p>
    </div>
  )
}

Card.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}
