import React from 'react'
import styles from './ManagerLayout.module.css'
import ManagerHeader from './ManagerHeader'
import ManageSide from './ManageSide'
import { Outlet } from 'react-router-dom'


//////////////////////////////////////////////////////////////////////////////
//- 매니저가 보는 화면의 레이아웃, 매니저 헤더, 메니저 사이드로 존재(3분할 화면) -//
//////////////////////////////////////////////////////////////////////////////
const ManagerLayout = ({setloginInfo}) => {
  return (
    <div className={styles.container}>
      <ManagerHeader setloginInfo={setloginInfo} />
      <div className={styles.main}>
        <div className={styles.side}>
         <ManageSide />
        </div>

        {/* 아웃렛은 위치잡는거임 */}
        <div className={styles.content}><Outlet/></div>
      </div>
    </div>
  )
}

export default ManagerLayout