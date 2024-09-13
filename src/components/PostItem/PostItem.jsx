import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'

import styles from './PostItem.module.css'

export default function PostItem({ post }) {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(`/posts/${post.id}`)
  }

  return (
    <div
      className={styles.post}
      onClick={clickHandler}
    >
      <Card {...post} />
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
}
