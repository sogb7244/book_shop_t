import React from 'react'
import styles from './Button.module.css'
import axios from 'axios'
import Join from '../../pages/member/Join'

const Button = ({title = '버튼', variant='purple',size ='small',onClick},) => {
  return (
    <button
     type='button'
     className={`${styles.button} ${styles[variant]} ${styles[size]}`}
     onClick={() => {onClick((e) => {
      axios
      .post(`http://localhost:8080`,)
      .then()
      .catch()
     })}}
       // ...props도 사용가능
     >{title}</button>
  )
}

export default Button