import PropTypes from 'prop-types'
import { Form as RForm, useNavigate } from 'react-router-dom'
import Btn from '../Btn/Btn'

import styles from './Form.module.css'

export default function Form({ method, action, defaultValue = '', autoFocus = false }) {
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <RForm
      method={method}
      action={action}
      className={styles.form}
    >
      <textarea
        name='content'
        autoFocus={autoFocus}
        defaultValue={defaultValue}
      />
      <div className={styles.buttons}>
        <Btn title='Сохранить' />
        <Btn
          title='Отмена'
          onClick={handleCancel}
        />
      </div>
    </RForm>
  )
}

Form.propTypes = {
  method: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  autoFocus: PropTypes.bool,
}
