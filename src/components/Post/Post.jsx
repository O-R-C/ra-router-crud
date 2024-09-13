import PropTypes from 'prop-types'
import Wrapper from '../Wrapper/Wrapper'
import Controls from '../Controls/Controls'
import styles from './Post.module.css'

export default function Post({ post: { author, content } = {} }) {
  return (
    <Wrapper>
      <div className={styles.post}>
        <h3>{author}</h3>
        <p>{content}</p>
        <hr />
        <Controls />
      </div>
    </Wrapper>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}
