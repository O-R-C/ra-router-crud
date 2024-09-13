import EditForm from '../EditForm/EditForm'

import styles from './EditPost.module.css'

export default function EditPost() {
  return (
    <div className={styles.container}>
      <h2>Редактировать пост</h2>
      <EditForm />
    </div>
  )
}
