import Btn from '../Btn/Btn'
import { useNavigate } from 'react-router-dom'
import styles from './Controls.module.css'

export default function Controls() {
  const navigate = useNavigate()

  const handleDelete = () => {
    navigate(`confirm-delete`)
  }

  const handleEdit = () => {
    navigate(`edit`)
  }

  return (
    <div className={styles.controls}>
      <Btn
        title='Изменить'
        onClick={handleEdit}
      />
      <Btn
        title='Удалить'
        deleteProp={true}
        onClick={handleDelete}
      />
    </div>
  )
}
