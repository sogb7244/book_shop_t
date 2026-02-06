import React from 'react'
import styles from './ManagerHeader.module.css'
const ManagerHeader = () => {
  return (
    <div className={styles.container}>
      <img 
      src="/bookrealm.png"
      className={styles.logo}/>
      <ul>
        <li>login</li>
        <li>join</li>
      </ul>
    </div>
  )
}

export default ManagerHeader