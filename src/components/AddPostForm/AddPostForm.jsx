import { Form, useNavigate } from 'react-router-dom'
import Btn from '../Btn/Btn'
import styles from './AddPostForm.module.css'

export default function AddPostForm() {
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <h2>Создать пост</h2>
      <Form
        method='post'
        action={`/posts/new/add-post`}
        className={styles.form}
      >
        <textarea
          name='content'
          autoFocus
        />
        <div className={styles.buttons}>
          <Btn title='Сохранить' />
          <Btn
            title='Отмена'
            onClick={handleCancel}
          />
        </div>
      </Form>
    </div>
  )
}
