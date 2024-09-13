import Btn from '../Btn/Btn'
import { Form, useNavigate } from 'react-router-dom'
import styles from './ConfirmDelete.module.css'

export default function ConfirmDelete() {
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <h1>Вы действительно хотите удалить?</h1>
      <h2>Данное действие нельзя отменить</h2>
      <div className={styles.buttons}>
        <Form
          method='delete'
          action='delete-post'
        >
          <Btn
            title='Удалить'
            deleteProp={true}
          />
        </Form>
        <Btn
          title='Отмена'
          onClick={handleCancel}
        />
      </div>
    </div>
  )
}
