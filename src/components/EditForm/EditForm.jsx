import { useLoaderData } from 'react-router-dom'
import Form from '../Form/Form'
import styles from './EditForm.module.css'

export default function EditForm() {
  const { data } = useLoaderData()

  return (
    <div className={styles.container}>
      <Form
        method='post'
        action={`/posts/${data.id}/edit`}
        defaultValue={data.content}
      />
    </div>
  )
}
