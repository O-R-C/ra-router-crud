import PropTypes from 'prop-types'
import Wrapper from '../Wrapper/Wrapper'
import Controls from '../Controls/Controls'
import styles from './Post.module.css'
import Card from '../Card/Card'

export default function Post({ post }) {
  return (
    <Wrapper>
      <div className={styles.post}>
        <Card {...post} />
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
