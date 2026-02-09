import React from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div>
     로그인페이지 입니다.
      <div className={styles.container}>
        <Input />
        <Input />
        <Button />
      </div>
    </div>
  )
}

export default Login