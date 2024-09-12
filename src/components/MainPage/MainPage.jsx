import PropTypes from 'prop-types'
import Posts from '../Posts/Posts'
import Header from '../Header/Header'
import styles from './MainPage.module.css'

export default function MainPage({ posts = [] }) {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Posts posts={posts} />
    </div>
  )
}

MainPage.propTypes = {
  posts: PropTypes.array,
}
