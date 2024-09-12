import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import styles from './Post.module.css'

export default function Post({ author, content, id }) {
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

Post.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
}
