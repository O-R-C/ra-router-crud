import Form from '../Form/Form'
import styles from './AddPostForm.module.css'

export default function AddPostForm() {
  return (
    <div className={styles.container}>
      <h2>Создать пост</h2>
      <Form
        method='post'
        action='/posts/new/add-post'
        autoFocus={true}
      />
    </div>
  )
}
