import PropTypes from 'prop-types'
import Post from '../Post/Post'
import Wrapper from '../Wrapper/Wrapper'

export default function Posts({ posts }) {
  return (
    <>
      {posts?.length ? (
        posts.map((post) => (
          <Wrapper key={post.id}>
            <Post {...post} />
          </Wrapper>
        ))
      ) : (
        <h3>Посты не найдены</h3>
      )}
    </>
  )
}

Posts.propTypes = {
  posts: PropTypes.array,
}
