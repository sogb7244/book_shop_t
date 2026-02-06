import React from 'react'
import styles from './join.module.css'

const Join = () => {
  return (
   <div className={styles.container}>
      <div
        className={styles.join}>
          <p>Email</p>
          <div>
            <input type="text" />
            <button type='button'>중복확인</button>
          </div>
      </div>
      <div>
        <p>Password</p>
        <input type="text" />
      </div>
      <div>
        <p>Confirm Password</p>
        <input type="text" />
      </div>
      <div>
        <p>Name</p>
        <input type="text"/>
      </div>
      <div>
        <p>Tel</p>
        <div className={styles.telinput}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
      <div className={styles.address}>
        <p>Address</p>
        <div>
          <input type="text" />
          <button>검색</button>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
      <button type='button'>회원가입</button>
   </div>
  )
}

export default Join