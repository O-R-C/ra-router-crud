import styles from './Header.module.css'
import Btn from '../Btn/Btn'
import Wrapper from '../Wrapper/Wrapper'

export default function Header() {
  return (
    <Wrapper>
      <header className={styles.header}>
        <Btn title='Создать пост' />
      </header>
    </Wrapper>
  )
}
