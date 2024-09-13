import PropTypes from 'prop-types'
import Posts from '../Posts/Posts'
import Header from '../Header/Header'
// import styles from './Main.module.css'

export default function Main({ posts = [] }) {
  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  )
}

Main.propTypes = {
  posts: PropTypes.array,
}
