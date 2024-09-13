import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import styles from './PostItem.module.css'

export default function PostItem({ author, content, id }) {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(`/posts/${id}`)
  }

  return (
    <div
      className={styles.post}
      onClick={clickHandler}
    >
      <h3>{author}</h3>
      <p>{content}</p>
    </div>
  )
}

PostItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
}
