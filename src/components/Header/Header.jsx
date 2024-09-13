import styles from './Header.module.css'
import Btn from '../Btn/Btn'
import Wrapper from '../Wrapper/Wrapper'
import { Form } from 'react-router-dom'

export default function Header() {
  return (
    <Wrapper>
      <header className={styles.header}>
        <Form
          method='get'
          action='/posts/new'
        >
          <Btn title='Создать пост' />
        </Form>
      </header>
    </Wrapper>
  )
}
