import PropTypes from 'prop-types'
import PostItem from '../PostItem/PostItem'
import Wrapper from '../Wrapper/Wrapper'
import styles from './Posts.module.css'

export default function Posts({ posts }) {
  return (
    <ul className={styles.posts}>
      {posts?.length ? (
        posts.map((post) => (
          <li key={post.id}>
            <Wrapper>
              <PostItem {...post} />
            </Wrapper>
          </li>
        ))
      ) : (
        <h3>Посты не найдены</h3>
      )}
    </ul>
  )
}

Posts.propTypes = {
  posts: PropTypes.array,
}
