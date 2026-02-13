import React from 'react'
import styles from './ManagerHeader.module.css'
import { useNavigate } from 'react-router-dom';
const ManagerHeader = ({setloginInfo}) => {
  const loginfo = sessionStorage.getItem('loginInfo');
  const log = JSON.parse(loginfo);
  console.log(log);
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <img 
      src="/bookrealm.png"
      className={styles.logo}/>
      <ul>
        {
          log.memEmail ?
          <>
          <li>{log.memRole}님 반갑습니다</li>
        <li
          onClick={(e) => {
            sessionStorage.removeItem('loginInfo');
            setloginInfo({})
            nav('/')
          }}>logout</li>
          </>
          :
          <>
          <li>login</li>
          <li>join</li>
          </>
        }
      </ul>
    </div>
  )
}

export default ManagerHeader