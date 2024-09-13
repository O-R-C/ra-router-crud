import { Form, useNavigate, useLoaderData } from 'react-router-dom'
import Btn from '../Btn/Btn'
import styles from './EditForm.module.css'

export default function EditForm() {
  const navigate = useNavigate()
  const { data } = useLoaderData()
  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <Form
        method='put'
        action={`/posts/${data.id}/edit`}
        className={styles.form}
      >
        <textarea
          name='content'
          defaultValue={data.content}
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
